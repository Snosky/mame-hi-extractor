import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'jackal'
})
export default class Jackal extends AbstractExtractor {
    protected charset = {
        0x0C: '-',
        0x0D: '.',
        0x0E: ':',
        0x0F: '!',
        0x10: ' '
    };

    extract(): this {
        for (let i = 0; i < 5; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: parseInt(this.hi!.slice(i * 8, 4).readIntBE().toString(16)),
                name:this.hi!.slice(i * 8 + 4, 3).toString(this.charset, 48)
            })
        }
        return this;
    }
}
