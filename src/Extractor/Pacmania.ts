import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'pacmania'
})
export default class Pacmania extends AbstractExtractor {
    protected charset = {
        0x20: ' ',
        0x21: '!',
        0x26: '&',
        0x27: '\\',
        0x2C: ',',
        0x2E: '.',
    };

    extract(): this {
        for (let i = 0; i < 10; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: parseInt(this.hi!.slice(i * 8, 4).readIntBE().toString(16)) * 10,
                name: this.hi!.slice(i * 8 + 5, 3).toString(this.charset)
            });
        }
        return this;
    }
}
