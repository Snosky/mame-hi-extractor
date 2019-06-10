import AbstractExtractor from '../AbstractExtractor';
import {join} from 'path';

export default class Bublbobl extends AbstractExtractor {
    constructor(filePath: string, fileName = 'bublbobl.hi') {
        super(join(filePath, fileName));
    }

    extract() {
        let currentByte = 0;
        for (let i = 0; i < 5; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: parseInt(this.buffer.buffer.readIntLE(currentByte, 3).toString(16)) * 10,
                name: this.buffer.slice(currentByte + 4, 3).buffer.toString(),
                // TODO : Extras SCORE
            });
            currentByte += 7;
        }
    }
}
