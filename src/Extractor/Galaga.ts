import AbstractExtractor from "../AbstractExtractor";
import {join} from "path";

export default class Galaga extends AbstractExtractor {

    constructor(filePath: string, fileName = 'galaga.hi') {
        super(join(filePath, fileName));
    }

    extract(): any {
        let currentByte = 0;
        for (let i = 0; i < 5; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.buffer.slice(currentByte, 6).trim(0x24).decodeBCDLE(),
                name: ''
            });
            currentByte += 6;
        }
        for (let i = 0; i < 5; i++) {
            this.output.default[i].name = this.asciiOffset(this.buffer.slice(currentByte, 3).buffer.toString(), 55);
            currentByte += 3;
        }
    }
}
