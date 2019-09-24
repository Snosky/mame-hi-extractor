import AbstractExtractor from '../AbstractExtractor';
import Extractor from '../Decorator/Extractor';

@Extractor({
    name: '1942',
    hi: true
})
export default class Extractor1942 extends AbstractExtractor {
    protected charset = {
        0x24: '.',
        0x25: '-',
        0x26: '&',
        0x27: '?',
        0x28: '!',
        0x29: '%',
        0x2a: '(',
        0x2b: ')',
        0x2c: ' ',
        0x2d: ' ',
        0x2e: ' ',
        0x30: ' ',
        0x38: ' ',
    };

    extract(): any {
        let currentByte = 0;
        for (let i = 0; i < 10; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte + 1, 4).toHexNumber(),
                name: this.hi!.slice(currentByte + 5, 8).toString(this.charset, 55),
            });
            currentByte += 16;
        }
    }
}
