import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'dkong'
})
export default class Dkong extends AbstractExtractor {
    protected charset = {
        0x10: ' ',
        0x2B: '.',
        0x2C: '-'
    };

    extract(): this {
        for (let i = 0; i < 5; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: parseInt(this.hi!.buffer.readIntLE(34 * i + 29, 3).toString(16)),
                name: this.hi!.slice(34 * i + 15, 3).toString(this.charset, 48)
            })
        }
        return this;
    }
}
