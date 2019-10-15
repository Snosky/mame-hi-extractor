import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'qbert',
    hi: false,
    nvram: 'nvram'
})
export default class Qbert extends AbstractExtractor {
    extract(): this {
        let currentByte = 2562;
        for (let i = 22; i >= 0; i--) {
            this.scores.default.push({
                rank: i + 1,
                name: this.nvram!.slice(currentByte, 3).toString({}, 55),
                score: this.nvram!.slice(currentByte + 3, 7).byteFilter(0x24).nibbleSkip().toHexNumber()
            });
            currentByte += 10;
        }
        return this;
    }
}
