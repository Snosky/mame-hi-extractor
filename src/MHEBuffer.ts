export default class MHEBuffer {
    public buffer: Buffer;

    constructor(file: Buffer) {
        this.buffer = Buffer.from(file);
    }

    public slice(begin?: number, size?: number) {
        return new MHEBuffer(this.buffer.slice(begin, size ? begin! + size : size));
    }

    public trim(trimNeedle: number): MHEBuffer {
        let i = 0;
        for (let buf of this.buffer) {
            if (buf === trimNeedle) {
                i++;
            } else {
                break;
            }
        }
        this.buffer = this.buffer.slice(i, this.buffer.byteLength - i);
        return this;
    }

    public decodeBase40(): string {
        let originValue = this.buffer.readIntBE(0, this.buffer.byteLength);
        const ctable = [
            ['\0', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' ', '\n'],
            ['\0', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '(', '!', '@', '#', ',', '.', '?', '/', '*', ')', '<', '>']
        ];
        let shiftState = 0;
        let result = '';
        let tmp = Math.round(originValue/ 1600);
        if (tmp === 39) {
            shiftState = 1;
        } else {
            result += ctable[shiftState][tmp];
        }
        tmp = Math.round((originValue - tmp * 1600) / 40);
        if (tmp === 39) {
            shiftState = 1;
        } else {
            result += ctable[shiftState][tmp];
            shiftState = 0;
        }
        tmp = Math.round(originValue % 40);
        result += (tmp !== 39) ? ctable[shiftState][tmp] : '';
        return result;
    }

    public decodeBase32(): string {
        const ctable = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '2', '3', '4', '5', '6', '7'];
        let result = '';
        let len = Math.floor(this.buffer.byteLength * 8 / 5);
        let buffer = this.buffer.readIntBE(0, this.buffer.byteLength);
        while (len) {
            const charId = (buffer & 31) - 1;
            result = (ctable[charId] ? ctable[charId] : ' ') + result;
            buffer = buffer >> 5;
            len--;
        }
        return result;
    }

    /**
     * Decode a BCD buffer in Big Endian
     */
    public decodeBCD(): number {
        let result = .0;
        for (let buf of this.buffer) {
            result = result * 10 + (buf & 0x0F);
        }
        return result;
    }

    /**
     * Decode a BCD in Little Endian
     */
    public decodeBCDLE(): number {
        let result = .0;
        for (let i = this.buffer.byteLength; i >= 0; --i) {
            result = result * 10 + (this.buffer[i] & 0x0F);
        }
        return result;
    }

    /**
     * Skip even or odd bytes
     * @param even
     */
    public byteSkip(even: boolean) {
        let buffer = [];
        for (let i = 0; i < this.buffer.length; i++) {
            if ((!even && i % 2) || (even && i % 2 === 0)) {
                buffer.push(this.buffer[i]);
            }
        }
        return new MHEBuffer(Buffer.from(buffer));
    }

    public nibbleSkip(even = false) {
        let buffer = [];
        let tmp = 0;
        const isEven = this.buffer.length % 2 === 0;
        for (let i = 0; i < this.buffer.length; i++) {
            if (isEven && (i + 1) % 2 !== 0 ) {
                tmp = this.buffer[i] & (even ? 0xF0 : 0x0F);
            } else if (!isEven && (i + 1) % 2 === 0 && i !== 0) {
                tmp = this.buffer[i] & (even ? 0xF0 : 0x0F);
            } else {
                tmp = tmp << 4;
                tmp ^= this.buffer[i] & (even ? 0xF0 : 0x0F);
                buffer.push(tmp);
            }
        }
        return new MHEBuffer(Buffer.from(buffer));
    }

    public byteMap(fn: (byte: number) => number) {
        this.buffer = Buffer.from(this.buffer.map(fn));
        return this;
    }

    public readIntBE() {
        return this.buffer.readIntBE(0, this.buffer.byteLength);
    }

    public readIntLE() {
        return this.buffer.readIntLE(0, this.buffer.byteLength);
    }

    public toStringLE(offset = 0) {
        let ret = '';
        for (let i = 0; i < this.buffer.byteLength; i++) {
            ret = String.fromCharCode(this.buffer.readUIntLE(i, 1) + offset) + ret;
        }
        return ret;
    }

    /**
     * Return the buffer hexa as a number
     * Example : Buffer = 0x0872 => return 872
     * @param rtl right-to-left, reverse te returned value, ex: Buffer = 0x0872 => return 2780
     */
    public toHexNumber(rtl = false) {
        let str = this.buffer.toString('hex');
        if (rtl) {
            str = str.split('').reverse().join('')
        }
        return parseInt(str);
    }

    /**
     * Swap x number of byte
     * Example: swap = 2, buffer = 0xF0E1 => return 0xE1F0
     * Example: swap = 4, buffer = 0xF0E1D2C3 => return 0xC3D2E1F0
     * @param swap
     */
    public byteSwap(swap: number) {
        let ret: number[] = [];
        for (let i = 0; i < this.buffer.length; i += swap) {
            let tmp = this.slice(i, swap);
            for (let y = tmp.buffer.length - 1; y >= 0; y--) {
                ret.push(tmp.buffer[y])
            }
        }
        this.buffer = Buffer.from(ret);
        return this;
    }
}
