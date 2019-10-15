import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

// TODO : Not tested
@Extractor({
    name: 'suprmrio'
})
export default class Suprmrio extends AbstractExtractor {
    protected charset = {
        0x24: ' ',
        0x28: '-',
        0x2B: '!',
        0xAF: '.',
        0xFA: '\\',
    };

    extract(): any {
        for (let i = 0; i < 10; i++) {
            this.scores.default.push({
                rank: i + 1,
                name: this.hi!.slice(29 + i * 3, 3).toString(this.charset, 55),
                score: parseInt(this.hi!.slice(69 + i * 7, 7).nibbleSkip().readIntBE().toString(16))
            });
        }
        return this;
    }
}
