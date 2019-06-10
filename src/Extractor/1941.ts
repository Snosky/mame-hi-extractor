import AbstractExtractor from '../AbstractExtractor';
import {join} from 'path';

export default class Extractor extends AbstractExtractor {
    constructor(filePath: string, fileName = '1941.hi') {
        super(join(filePath, fileName));
    }

    extract(): any {
        let currentByte = 40;
        for (let i = 0; i < 10; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: parseInt(this.buffer.buffer.readIntBE(currentByte, 4).toString(16)),
                name: this.buffer.slice(currentByte + 4, 3).buffer.toString(),
                // TODO : Extras data like GRADE
            });
            currentByte += 8;
        }
    }
}
