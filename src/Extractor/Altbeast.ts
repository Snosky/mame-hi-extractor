import AbstractExtractor from '../AbstractExtractor';
import {join} from "path";

export default class Altbeast extends AbstractExtractor {
    constructor(filePath: string, fileName = 'altbeast.hi') {
        super(join(filePath, fileName));
    }

    extract(): any {
        let currentByte = 0;
        for (let i = 0; i < 7; i++) {
            this.scores.default.push({
                rank: i,
                score: parseInt(this.buffer.buffer.readIntBE(currentByte, 4).toString(16)),
                name: this.buffer.slice(currentByte + 5, 3).buffer.toString(),
                // TODO : Extras data stage
            });
            currentByte += 8;
        }
    }
}
