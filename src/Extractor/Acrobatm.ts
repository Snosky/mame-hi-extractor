import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'acrobatm',
})
export default class Acrobatm extends AbstractExtractor {
    protected charset = {
        0x00: ' ',
        0x2E: '.',
    };

    extract(): this {
        let scoreCurrentByte = 0;
        let nameCurrentByte = 42;
        for (let i = 0; i < 10; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(scoreCurrentByte, 4).toHexNumber(),
                name: this.hi!.slice(nameCurrentByte, 6).byteSkip(false).toString(this.charset)
            });
            scoreCurrentByte += 4;
            nameCurrentByte += 8;
        }
        return this;
    }
}
