export default class MHEBuffer {
    public buffer: Buffer;

    constructor(file: Buffer) {
        this.buffer = Buffer.from(file);
    }

    public slice(begin?: number, size?: number) {
        return new MHEBuffer(this.buffer.slice(begin, size ? begin! + size : size));
    }

    public trimStart(trimNeedle: number): MHEBuffer {
        let i = 0;
        for (let buf of this.buffer) {
            if (buf === trimNeedle) {
                i++;
            } else {
                break;
            }
        }
        this.buffer = this.buffer.slice(i, this.buffer.byteLength - i);
        console.log('trimStart', this.buffer)
        return this;
    }

    public trimEnd(trimNeedle: number): MHEBuffer {
        let i = 0;
        for (let y = this.buffer.byteLength - 1; y > 0; y--) {
            if (this.buffer[y] === trimNeedle) {
                i++;
            } else {
                break;
            }
        }
        this.buffer = this.buffer.slice(0, this.buffer.byteLength - i);
        console.log('trimEnd', this.buffer)
        return this;
    }

    public trim(trimNeedle: number): MHEBuffer {
        console.log('orig', this.buffer)
        return this.trimStart(trimNeedle).trimEnd(trimNeedle);
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

    public decodeBase32(isLE: boolean = false): string {
        const ctable = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '2', '3', '4', '5', '6', '7'];
        let result = '';
        let len = Math.floor(this.buffer.byteLength * 8 / 5);
        let buffer = isLE ? this.readIntLE() : this.readIntBE();
        while (len) {
            const charId = (buffer & 31) - 1;
            if (isLE) {
                result += ctable[charId] ? ctable[charId] : ' '
            } else {
                result = (ctable[charId] ? ctable[charId] : ' ') + result;
            }
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

    /**
     * Reverse nibbles, 0xF0 become 0x0F
     */
    public nibbleSwap() {
        let buffer = [];
        for (const buf of this.buffer) {
            let tmp = 0;
            tmp = (buf & 0xF0) >> 4;
            tmp ^= (buf & 0x0F) << 4;
            buffer.push(tmp);
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

    public toStringLE(charset?: {[key:number]: string}, offset = 0) {
        let newBuffer = [];
        for (let i = this.buffer.byteLength - 1; i >= 0; i--) {
            newBuffer.push(this.buffer.readUIntLE(i, 1));
        }
        this.buffer = Buffer.from(newBuffer);
        return this.toString(charset, offset);
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
     * Reverse byte array
     */
    public reverse() {
        this.buffer = this.buffer.reverse();
        return this;
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

    /**
     * Remove unwanted bytes
     * Example: buffer = 0x52502424, filteredBytes = 0x24 => return 0x5250
     * @param filteredBytes
     */
    public byteFilter(filteredBytes: number|number[]) {
        let result: number[] = [];
        if (!Array.isArray(filteredBytes)) {
            filteredBytes = [filteredBytes];
        }
        for (let byte of this.buffer) {
            if (filteredBytes.indexOf(byte) < 0) {
                result.push(byte);
            }
        }
        this.buffer = Buffer.from(result);
        return this;
    }

    /**
     * Buffer to string where a char is on 1 byte (8 bits)
     * @param charset
     * @param offset
     * @param step
     */
    public toString(charset: {[key:number]: string} = {}, offset: number = 0, step: number = 1) {
        step = step || 1;

        let newBuffer = [];
        for (const buf of this.buffer) {
            newBuffer.push(charset[buf] ? charset[buf].charCodeAt(0) : (buf / step + offset))
        }
        this.buffer = Buffer.from(newBuffer);
        return this.buffer.toString();
    }

    /**
     * Buffer to string where a char is on 2 bytes (16 bits)
     * @param charset
     * @param offset
     */
    public toString16(charset?: {[key: number]: string}, offset?: number) {
        offset = offset || 0;
        if (charset && Object.entries(charset).length) {
            let newBuffer = [];
            for (let i = 0; i < this.buffer.byteLength; i += 2) {
                const uint16 = this.slice(i, 2).buffer.readUInt16BE(0);
                newBuffer.push(charset[uint16] ? charset[uint16].charCodeAt(0) : (uint16 + offset));
            }
            this.buffer = Buffer.from(newBuffer);
        } else if (offset) {
            let newBuffer = [];
            for (let i = 0; i < this.buffer.byteLength; i += 2) {
                const uint16 = this.slice(i, 2).buffer.readUInt16BE(0);
                newBuffer.push(uint16 + offset);
            }
            this.buffer = Buffer.from(newBuffer);
        }
        return this.buffer.toString();
    }

    /**
     * Filter byte from a mask
     * Ex: Buffer = 0x05FF5B, mask = "FF00FF" => output = 0x055B
     * @param mask
     */
    public byteMask(mask: string) {
        const maskBuffer = Buffer.from(mask, 'hex');
        let result = [];
        for (let i = 0; i < this.buffer.byteLength; i++) {
            if (maskBuffer[i] === 0) continue;
            result.push(this.buffer[i]);
        }
        this.buffer = Buffer.from(result);
        return this;
    }
}
