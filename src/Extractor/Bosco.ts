import AbstractExtractor from '../AbstractExtractor';
import {join} from "path";

/*
    TODO : Charsets
 */
export default class Bosco extends AbstractExtractor {
    constructor(filePath: string, fileName = 'bosco.hi') {
        super(join(filePath, fileName));
    }

    extract(): any {
        let currentByte = 0;
        for (let i = 0; i < 5; i++) {
            this.scores.default.push({
                rank: i + 1,
                name: this.asciiOffset(this.buffer.slice(currentByte, 3).buffer.toString(), 55),
                score: 0,
            });
            currentByte += 3;
        }
        for (let i = 0; i < 5; i++) {
            this.scores.default[i].score = parseInt(this.buffer.buffer.readIntBE(currentByte, 4).toString(16));
            currentByte += 4;
        }
    }
}
