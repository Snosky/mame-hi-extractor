import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'sf2'
})
export default class Sf2 extends AbstractExtractor {
    protected charset = {
        0x20: ' ',
        0x2E: '.'
    };

    extract(): this {
        for (let i = 0; i < 6; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: parseInt(this.hi!.slice(i * 8, 4).readIntBE().toString(16)),
                name: this.hi!.slice(i * 8 + 4, 3).toString(this.charset)
            });
        }
        return this;
    }
}
