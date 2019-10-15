import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'mslug',
    hi: false,
    nvram: 'saveram'
})
export default class Mslug extends AbstractExtractor {
    protected charset = {
        0x0B82: 'A',
        0x0B84: 'B',
        0x0B86: 'C',
        0x0B88: 'D',
        0x0B8A: 'E',
        0x0B8C: 'F',
        0x0B8E: 'G',
        0x0C80: 'H',
        0x0C82: 'I',
        0x0C84: 'J',
        0x0C86: 'K',
        0x0C88: 'L',
        0x0C8A: 'M',
        0x0C8C: 'N',
        0x0C8E: 'O',
        0x0BA0: 'P',
        0x0BA2: 'Q',
        0x0BA4: 'R',
        0x0BA6: 'S',
        0x0BA8: 'T',
        0x0BAA: 'U',
        0x0BAC: 'V',
        0x0BAE: 'W',
        0x0CA0: 'X',
        0x0CA2: 'Y',
        0x0CA4: 'Z',
        0x0B60: '0',
        0x0B62: '1',
        0x0B64: '2',
        0x0B66: '3',
        0x0B68: '4',
        0x0B6A: '5',
        0x0B6C: '6',
        0x0B6E: '7',
        0x0C60: '8',
        0x0C62: '9',
        0x0C6E: '?',
        0x0B42: '!',
        0x0C4C: '.',
        0x0B40: ' ',
    };

    extract(): any {
        this.nvram!.byteSwap(2);
        let currentByte = 804;
        for (let i = 0; i < 10; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: this.nvram!.slice(currentByte, 4).toHexNumber(),
                name: this.nvram!.slice(currentByte + 4, 6).toString16(this.charset)
            });
            currentByte += 12;
        }
        return this;
    }
}

