import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'scontra'
})
export default class Scontra extends AbstractExtractor {
    protected charset = {
        0x0B: ',',
        0x0C: '-',
        0x0D: '.',
        0x0E: '?',
        0x0F: '!',
        0x10: ' ',
    };

    extract(): this {
        for (let i = 0; i < 10; i++) {
            this.scores.default.push({
                rank: i + 1,
                name: this.hi!.slice(i * 8, 3).toString(this.charset, 48),
                score: parseInt(this.hi!.slice(i * 8 + 4, 4).readIntBE().toString(16))
            });
        }
        return this;
    }
}
