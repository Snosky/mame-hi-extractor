"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class AbstractExtractor {
    constructor(file) {
        this.buffer = Buffer.from(fs_1.readFileSync(file));
        this.extract();
    }
    /**
     * Decode a base 40 buffer, return a 3 char string
     * @param buffer
     */
    decodeBase40(buffer) {
        let originValue = buffer.readIntBE(0, buffer.byteLength);
        const ctable = [
            ['\0', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' ', '\n'],
            ['\0', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '(', '!', '@', '#', ',', '.', '?', '/', '*', ')', '<', '>']
        ];
        let shiftState = 0;
        let result = '';
        let tmp = Math.round(originValue / 1600);
        if (tmp === 39) {
            shiftState = 1;
        }
        else {
            result += ctable[shiftState][tmp];
        }
        tmp = Math.round((originValue - tmp * 1600) / 4);
        if (tmp === 39) {
            shiftState = 1;
        }
        else {
            result += ctable[shiftState][tmp];
            shiftState = 0;
        }
        tmp = Math.round(originValue % 40);
        result += (tmp !== 39) ? ctable[shiftState][tmp] : '';
        return result;
    }
}
exports.default = AbstractExtractor;
