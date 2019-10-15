import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'argus'
})
export default class Argus extends AbstractExtractor {
    protected charset = {
        0x19: ' ',
        0x1B: ' ',
        0x1C: ' ',
        0x2E: '.',
    };

    extract(): this {
        let currentByte = 0;
        for (let i = 0; i < 8; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 4).toHexNumber(),
                name: this.hi!.slice(currentByte + 4, 3).toString(this.charset),
            });
            currentByte += 8;
        }
        return this;
    }
}
