import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'spf2t'
})
export default class Spf2t extends AbstractExtractor {
    protected charset = {
        0x1A: '0',
        0x1B: '1',
        0x1C: '2',
        0x1D: '3',
        0x1E: '4',
        0x1F: '5',
        0x20: '6',
        0x21: '7',
        0x22: '8',
        0x23: '9',
        0x24: '!',
        0x25: '?',
        0x26: '.',
        0x27: '-',
        0x28: ',',
        0x29: '&black-heart;', // TODO : Special char
        0x2A: '&left-arrow;',
        0x2B: '&',
        0x2C: '=',
        0x2D: ' ',
    };

    extract(): this {
        for (let i = 0; i < 5; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: this.hi!.slice(i * 16, 4).readIntBE(),
                name: this.hi!.slice(i * 16 + 4, 3).toString(this.charset, 65)
            });
        }
        return this;
    }
}
