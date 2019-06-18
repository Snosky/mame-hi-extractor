import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";
import MHEBuffer from "../MHEBuffer";

@Extractor({
    name: 'punchout',
    nvram: 'nvram'
})
export default class Punchout extends AbstractExtractor {
    extract(): any {
        this.extractNvram();
        this.extractHi();
    }

    protected extractNvram() {
        let currentByte = 30;
        for (let i = 0; i < 40; i++) {
            this.scores.default.push({
                rank: i + 1,
                name: this.asciiOffset(this.nvram!.slice(currentByte, 6).byteSwap(2).nibbleSkip(false).buffer.toString(), 55),
                score: this.nvram!.slice(currentByte + 6, 6).nibbleSkip(false).toHexNumber(true)
            });
            currentByte += 12;
        }
    }

    protected extractHi() {
        let rank = this.scores.default.length;
        for (let i = 0; i < 10; i++) {
            this.scores.default.push({
                rank: rank + i + 1,
                name: this.asciiOffset(this.hi!.slice(i * 8 + 2, 3).buffer.toString(), 55),
                score: parseInt(this.hi!.slice(i * 8 + 5, 3).readIntLE().toString(16))
            });
        }
    }
}
