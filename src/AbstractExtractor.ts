import {readFileSync} from "fs";
import MHEBuffer from "./MHEBuffer";

export default abstract class AbstractExtractor {

    protected buffer!: MHEBuffer;
    protected output: Output = {default: []};

    public constructor(file: string) {
        this.buffer = new MHEBuffer(readFileSync(file));
        this.extract();
    }

    abstract extract(): any;

    public get scores(): Output {
        return this.output;
    }

    /**
     * Decode a base 40 buffer, return a 3 char string
     * @param buffer
     */
    protected decodeBase40(buffer: Buffer): string {
        let originValue = buffer.readIntBE(0, buffer.byteLength);
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

    /**
     * Decode a BCD buffer
     * @param buffer
     */
    protected decodeBCD(buffer: Buffer): number {
        let result = .0;
        for (const buf of buffer) {
            result *= 10;
            result += buf & 0x0F;
        }
        return result;
    }

    /**
     * ASCII Offset
     * @param str
     * @param offset
     */
    protected asciiOffset(str: string, offset: number) {
        let result = '';
        for (let char of str) {
            result += String.fromCharCode(char.charCodeAt(0) + offset);
        }
        return result;
    }
}
