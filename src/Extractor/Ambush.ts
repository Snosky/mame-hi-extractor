import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'ambush'
})
export default class Ambush extends AbstractExtractor {
    protected charset = {
        0x0A: 'A',
        0x0B: 'B',
        0x0C: '0',
        0x0D: 'C',
        0x0E: 'D',
        0x0F: 'E',
        0x10: '1',
        0x11: 'F',
        0x12: 'G',
        0x13: 'H',
        0x14: '2',
        0x15: 'I',
        0x16: 'J',
        0x17: 'K',
        0x18: '3',
        0x19: 'L',
        0x1A: 'M',
        0x1B: 'N',
        0x1C: '4',
        0x1D: 'O',
        0x1E: 'P',
        0x1F: 'Q',
        0x20: '5',
        0x21: 'R',
        0x22: 'S',
        0x23: 'T',
        0x24: '6',
        0x25: 'U',
        0x26: 'V',
        0x27: 'W',
        0x28: '7',
        0x29: 'X',
        0x2C: '8',
        0x30: '9',
        0x3A: ' ',
        0x4A: 'Y',
        0x4B: 'Z',
    };

    extract(): any {
        let currentByte = 3;
        for (let i = 0; i < 3; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 3).reverse().toHexNumber(),
                name: this.hi!.slice(currentByte + 3, 3).toString(this.charset)
            });
            currentByte += 12;
        }
        return this;
    }
}
