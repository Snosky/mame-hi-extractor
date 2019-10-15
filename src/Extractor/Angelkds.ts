import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'angelkds'
})
export default class Angelkds extends AbstractExtractor {
    protected charset = {
        0x00: ' ',
        0x3A: ' ',
        0x3B: ' ',
        0x3C: ' ',
    };

    extract(): this {
        let currentByte = 3;
        for (let i = 0; i < 20; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 3).toHexNumber(),
                name: this.hi!.slice(currentByte + 4, 10).toString(this.charset)
            });
            currentByte += 14;
        }
        return this;
    }
}
