import AbstractExtractor from '../AbstractExtractor';
import {join} from "path";

export default class Bombjack extends AbstractExtractor {
    constructor(filePath: string, fileName = 'bombjack.hi') {
        super(join(filePath, fileName));
    }

    extract(): any {
        let currentByte = 16;
        for (let i = 0; i < 10; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: parseInt(this.buffer.buffer.readIntLE(currentByte, 4).toString(16)),
                name: ''
            });
            currentByte += 4;
        }
        // TODO : Extras - Stage
        currentByte += 10;
        for (let i = 0; i < 10; i++) {
            currentByte += 2; // Skip RANK
            this.scores.default[i].name = this.buffer.slice(currentByte, 6).byteSkip(true).buffer.toString();
            currentByte += 8;
        }
    }
}
