import AbstractExtractor from '../AbstractExtractor';
import Extractor from '../Decorator/Extractor';

@Extractor({
    name: 'arkanoid',
    hi: true
})
export default class Arkanoid extends AbstractExtractor {
    extract(): any {
        let currentByte = 0;
        for (let i = 0; i < 5; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: parseInt(this.hi!.buffer.readIntBE(currentByte, 3).toString(16)) * 10,
                name: this.hi!.slice(currentByte + 4, 3).buffer.toString()
            });
            currentByte += 7;
        }
    }
}
