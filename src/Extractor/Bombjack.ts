import AbstractExtractor from '../AbstractExtractor';
import {join} from "path";
import Extractor from '../Decorator/Extractor';

@Extractor({
    name: 'bombjack',
    hi: true
})
export default class Bombjack extends AbstractExtractor {
    extract(): any {
        let currentByte = 16;
        for (let i = 0; i < 10; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: parseInt(this.hi!.buffer.readIntLE(currentByte, 4).toString(16)),
                name: ''
            });
            currentByte += 4;
        }
        // TODO : Extras - Stage
        currentByte += 10;
        for (let i = 0; i < 10; i++) {
            currentByte += 2; // Skip RANK
            this.scores.default[i].name = this.hi!.slice(currentByte, 6).byteSkip(true).buffer.toString();
            currentByte += 8;
        }
    }
}
