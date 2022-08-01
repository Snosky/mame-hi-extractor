import AbstractExtractor from '../AbstractExtractor';
import Extractor from '../Decorator/Extractor';

@Extractor({
    name: 'captcomm',
    hi: true
})
export default class Captcomm extends AbstractExtractor {
    protected charset = {
        0x00: 'A',
        0x02: 'B',
        0x04: 'C',
        0x06: 'D',
        0x08: 'E',
        0x0A: 'F',
        0x0C: 'G',
        0x0E: 'H',
        0x10: 'I',
        0x12: 'J',
        0x14: 'K',
        0x16: 'L',
        0x18: 'M',
        0x1A: 'N',
        0x1C: 'O',
        0x1E: 'P',
        0x20: 'Q',
        0x22: 'R',
        0x24: 'S',
        0x26: 'T',
        0x28: 'U',
        0x2A: 'V',
        0x2C: 'W',
        0x2E: 'X',
        0x30: 'Y',
        0x32: 'Z'
    };

    extract(): this {
        let currentByte = 0;
        for (let i = 0; i < 50; i++) {             
            this.scores.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte + 4, 4).toHexNumber(),
                name: this.hi!.slice(currentByte, 3).toString(this.charset),
            });
            currentByte += 8;
        }
        return this;
    }
}
