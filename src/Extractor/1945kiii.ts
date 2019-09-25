import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: '1945kiii'
})
export default class Extractor1945kiii extends AbstractExtractor {
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
        0x24: '-',
        0x25: '!',
        0x26: '$',
        0x27: '^',
        0x28: '&',
        0x29: '.',
        0x2A: ';',
        0x2B: '?',
        0x2C: '?',
        0x2D: '+',
        0x2E: '-',
        0x2F: '-',
        0x30: '=',
        0x31: ',',
        0x32: '.',
        0x33: '/',
        0x34: '?',
        0x35: '<',
        0x36: '>',
        0x37: ';',
        0x38: ':',
        0x39: '|',
        0x3A: ' ',
        0x3B: ' ',
        0x3C: ' ',
    };

    extract(): any {
        let currentByte = 0;
        for (let i = 0; i < 10; i++) {
            this.output.default.push({
                rank: i + 1,
                name: this.hi!.slice(currentByte + 1, 3).toString(this.charset, 65),
                score: this.hi!.slice(currentByte + 5, 4).readIntBE(),
            });
            currentByte += 10;
        }
    }
}
