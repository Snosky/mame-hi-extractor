import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'simpsons'
})
export default class Simpsons extends AbstractExtractor {
    protected charset = {
        0x40: ' ',
        0x5B: '.',
        0x5C: '-',
        0x5D: '?',
        0x5E: '!',
        0x5F: '&',
        0x60: '@',
        0x61: '&black-star;',
        0x62: '$',
    };

    extract(): any {
        for (let i = 0; i < 10; i++) {
            this.scores.default.push({
                rank: i + 1,
                name: this.hi!.slice(i * 8, 3).toString(this.charset),
                score: parseInt(this.hi!.slice(i * 8 + 3, 2).readIntBE().toString(16))
            });
        }
    }
}
