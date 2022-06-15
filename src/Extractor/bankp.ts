import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'bankp'
})
export default class Bankp extends AbstractExtractor {
protected charset = {
        0x00: ' ',
        0x3d: '.'
    };
    extract(): this {
        let currentByte = 0;
        for (let i = 0; i < 10; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 7).nibbleSkip().toHexNumber(),
                name: this.hi!.slice(currentByte + 7, 3).toString(this.charset)
            });
            currentByte += 16;
        }
        return this;
    }
}
