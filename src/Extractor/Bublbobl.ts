import AbstractExtractor from '../AbstractExtractor';
import Extractor from '../Decorator/Extractor';

@Extractor({
    name: 'bublbobl',
    hi: true
})
export default class Bublbobl extends AbstractExtractor {
    extract() {
        let currentByte = 0;
        for (let i = 0; i < 5; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: parseInt(this.hi!.buffer.readIntLE(currentByte, 3).toString(16)) * 10,
                name: this.hi!.slice(currentByte + 4, 3).toString(),
                // TODO : Extras SCORE
            });
            currentByte += 7;
        }
        return this;
    }
}
