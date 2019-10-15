import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'toki'
})
export default class Toki extends AbstractExtractor {
    protected charset = {
        0x00: ' ',
        0x20: ' ',
        0x5B: '[',
        0x5C: '\\',
        0x5D: ']'
    };

    extract(): any {
        for (let i = 0; i < 20; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: parseInt(this.hi!.slice(i * 4, 4).readIntBE().toString(16)),
                name: this.hi!.slice(80 + i * 4 + 1, 3).toString(this.charset)
            });
        }
        return this;
    }
}
