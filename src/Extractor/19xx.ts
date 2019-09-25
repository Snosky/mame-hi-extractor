import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: '19xx'
})
export default class Extractor19xx extends AbstractExtractor {
    protected charset = {
        0x34: '!',
        0x35: '#',
        0x36: '$',
        0x37: '%',
        0x38: '&',
        0x39: '(',
        0x3a: ')',
        0x3b: ',',
        0x3c: '.',
        0x47: ' ',
        0xff: ' ',
    };

    extract(): any {
        let currentByte = 4;
        for (let i = 0; i < 11; i++) {
            this.output.default.push({
                rank: i + 1,
                name: this.hi!.slice(currentByte, 5).byteSkip(true).toString(this.charset, 65),
                score: this.hi!.slice(currentByte + 5, 4).toHexNumber()
            });
            currentByte += 12;
        }
    }
}
