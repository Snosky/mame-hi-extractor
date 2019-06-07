import AbstractExtractor from "../AbstractExtractor";
import {join} from "path";

export default class Marble extends AbstractExtractor {
    public constructor(filePath: string) {
        super(join(filePath, 'marble.hi'));
    }

    extract(): any {
        let rank = 1;
        for (let i = 0; i < this.buffer.buffer.length; i += 5) {
            this.output.default.push({
                rank: rank++,
                score: this.buffer.buffer.readIntBE(i, 3),
                name: this.buffer.slice(i + 3, i + 3 + 2).decodeBase40()
            });
        }
    }
}
