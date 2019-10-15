import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'tmnt'
})
export default class Tmnt extends AbstractExtractor {
    protected charset = {
        0x40: ' ',
        0x5B: ',',
        0x5C: '\\',
        0x5D: '?',
        0x5E: '!',
        0x5F: '.',
    };

    extract(): any {
        for (let i = 0; i < 11; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: parseInt(this.hi!.slice(i * 2, 2).readIntBE().toString(16)),
                name: this.hi!.slice(200 + i * 4, 3).toString(this.charset)
            });
        }
        return this;
    }
}
