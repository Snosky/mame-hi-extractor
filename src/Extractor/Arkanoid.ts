import AbstractExtractor from '../AbstractExtractor';
import {join} from "path";

export default class Arkanoid extends AbstractExtractor {
    constructor(filePath: string, fileName = 'arkanoid.hi') {
        super(join(filePath, fileName));
    }

    extract(): any {
        let currentByte = 0;
        for (let i = 0; i < 5; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: parseInt(this.buffer.buffer.readIntBE(currentByte, 3).toString(16)) * 10,
                name: this.buffer.slice(currentByte + 4, 3).buffer.toString()
            });
            currentByte += 7;
        }
    }
}
