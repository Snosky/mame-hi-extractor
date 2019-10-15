import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'digdug2'
})
export default class Digdug2 extends AbstractExtractor {
protected charset = {
        0x5B: '.'
    };
    extract(): this {
        let currentByte = 0;
        for (let i = 0; i < 5; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 6).nibbleSkip().toHexNumber() *10,
                name: this.hi!.slice(currentByte + 6, 6).toString(this.charset)
            });
            currentByte += 16;
        }
        return this;
    }
}
