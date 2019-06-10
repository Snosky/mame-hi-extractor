import AbstractExtractor from '../AbstractExtractor';
import Extractor from '../Decorator/Extractor';

@Extractor({
    name: 'btime',
    hi: true
})
export default class Btime extends AbstractExtractor {
    extract() {
        let currentByte = 3; // Skip TOP SCORE
        for (let i = 0; i < 5; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: parseInt(this.hi!.buffer.readIntLE(currentByte, 3).toString(16)),
                name: ''
            });
            currentByte += 3;
        }
        currentByte += 3; // Skip Separator
        for (let i = 0; i < 5; i++) {
            this.scores.default[i].name = this.asciiOffset(this.hi!.slice(currentByte, 3).buffer.toString(), 54); // TODO : Charset
        }
    }
}
