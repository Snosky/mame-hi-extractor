import AbstractExtractor from '../AbstractExtractor';
import Extractor from '../Decorator/Extractor';

@Extractor({
    name: 'altbeast',
    hi: true
})
export default class Altbeast extends AbstractExtractor {
    extract(): this {
        let currentByte = 0;
        for (let i = 0; i < 7; i++) {
            this.scores.default.push({
                rank: i,
                score: parseInt(this.hi!.buffer.readIntBE(currentByte, 4).toString(16)),
                name: this.hi!.slice(currentByte + 5, 3).toString(),
                // TODO : Extras data stage
            });
            currentByte += 8;
        }
        return this;
    }
}
