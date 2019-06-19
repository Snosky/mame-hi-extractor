import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";
import {log} from "util";
import MHEBuffer from "../MHEBuffer";

@Extractor({
    name: 'jumpbug'
})
export default class Jumpbug extends AbstractExtractor {
    extract(): any {
        // Get only names
        for (let i = 0; i < 3; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: 0,
                name: this.hi!.slice(12 + i * 3, 3).toStringLE({},-63)
            });
        }

        this.scores.default[0].score = this.getScore(21);
        this.scores.default[1].score = this.getScore(0);
        this.scores.default[2].score = this.getScore(6);
    }

    /**
     * Weird "low-endian" original buffer after nibble skip loop like "00 65 03", so you have to read left ro right but reverse nibbles
     * @param startByte
     * @TODO : Maybe make it global, or use a function to swap nibbles
     */
    protected getScore(startByte: number): number {
        let ret = '';
        let buf = this.hi!.slice(startByte, 6).nibbleSkip(false);
        for (let i = buf.buffer.byteLength - 1; i >= 0; i--) {
            let byte = buf.buffer.readUIntLE(i, 1);
            ret += (byte & 0x0F).toString(16) + (byte >> 4).toString(16);
        }
        return parseInt(ret);
    }
}
