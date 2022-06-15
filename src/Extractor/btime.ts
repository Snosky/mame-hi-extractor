import AbstractExtractor from '../AbstractExtractor';
import Extractor from '../Decorator/Extractor';

@Extractor({
    name: 'btime',
    hi: true
})
export default class Btime extends AbstractExtractor {
    protected charset = {
        0x00: ' ',
        0xCC: '-',
        0xCD: ',',
        0xCE: '?',
        0xCF: '!',
    };

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
            this.scores.default[i].name = this.hi!.slice(currentByte, 3).toString(this.charset, 54);
            currentByte += 3;
        }
        return this;
    }
}
