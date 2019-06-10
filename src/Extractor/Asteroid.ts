import AbstractExtractor from '../AbstractExtractor';
import {join} from "path";

export default class Asteroid extends AbstractExtractor {
    constructor(filePath: string, fileName = 'asteroid.hi') {
        super(join(filePath, fileName));
    }

    extract(): any {
        let currentBytes = 0;
        for (let i = 0; i < 10; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: parseInt(this.buffer.buffer.readIntLE(currentBytes, 2).toString(16)) * 10,
                name: '',
            });
            currentBytes += 2;
        }
        currentBytes += 3; //Separator
        for (let i = 0; i < 10; i++) {
            this.scores.default[i].name = this.asciiOffset(this.buffer.slice(currentBytes, 3).buffer.toString(), 54);
            currentBytes += 3;
        }
    }
}
