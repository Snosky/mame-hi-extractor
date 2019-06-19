import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'ddsom'
})
export default class Ddsom extends AbstractExtractor {
    protected charset = {
        0x6C: '&',
        0x6D: '!',
        0x6E: '?',
        0x6F: '-',
        0x72: '&roman-numeral-1;',
        0x73: '&roman-numeral-2;',
        0x74: '&roman-numeral-3;',
        0x77: '0',
        0x78: '1',
        0x79: '2',
        0x7A: '3',
        0x7B: '3',
        0x7C: '3',
        0x7D: '3',
        0x7E: '3',
        0x7F: '3',
        0x80: '9',
        0x81: ' ',
        0xFF: '',
    }

    extract(): any {
        for (let i = 0; i < 10; i++) {
            this.scores.default.push({
                rank: i + 1,
                name: this.hi!.slice(i * 14 + 2, 6).toString(this.charset, -16),
                score: parseInt(this.hi!.buffer.readIntBE(i * 14 + 8, 4).toString(16))
            })
        }
    }
}
