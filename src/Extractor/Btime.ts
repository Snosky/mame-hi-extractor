import AbstractExtractor from '../AbstractExtractor';
import {join} from 'path';

export default class Btime extends AbstractExtractor {
    constructor(filePath: string, fileName = 'btime.hi') {
        super(join(filePath, fileName));
    }

    extract() {
        let currentByte = 3; // Skip TOP SCORE
        for (let i = 0; i < 5; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: parseInt(this.buffer.buffer.readIntLE(currentByte, 3).toString(16)),
                name: ''
            });
            currentByte += 3;
        }
        currentByte += 3; // Skip Separator
        for (let i = 0; i < 5; i++) {
            this.scores.default[i].name = this.asciiOffset(this.buffer.slice(currentByte, 3).buffer.toString(), 54); // TODO : Charset
        }
    }
}
