import AbstractExtractor from '../AbstractExtractor';
import Extractor from '../Decorator/Extractor';

@Extractor({
    name: 'centiped',
    hi: true,
    nvram: 'earom',
})
export default class Centiped extends AbstractExtractor {
    extract() {
        this.extractNvram();
        this.extractHi();
    }

    protected extractNvram() {
        for (let i = 0; i < 3; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: parseInt(this.nvram!.buffer.readIntLE(i * 3, 3).toString(16)),
                name: this.asciiOffset(this.nvram!.slice(i * 3 + 9, 3).buffer.toString(), 64)
            });
        }
    }

    protected extractHi() {
        let currentBytes = 0;
        const startRank = this.scores.default.length;
        for (let i = 0; i < 5; i++) {
            this.scores.default.push({
                rank: i + 1 + startRank,
                score: parseInt(this.hi!.buffer.readIntLE(i * 3, 3).toString(16)),
                name: this.asciiOffset(this.hi!.slice(i * 3 + 15, 3).buffer.toString(), 64),
            });
            currentBytes += 3;
        }
    }
}
