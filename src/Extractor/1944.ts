import AbstractExtractor from '../AbstractExtractor';
import Extractor from '../Decorator/Extractor';

@Extractor({
    name: '1944',
    hi: true
})
export default class Extractor1944 extends AbstractExtractor {
    protected charset = {
        0x34: '!',
        0x36: '&',
        0x38: '.',
        0x3a: '@',
        0x3c: ' ',
        0x3e: ' ',
        0x40: ' ',
        0x42: ' ',
        0x44: ' ',
    };

    extract(): any {
        let currentByte = 4;
        let byteToNames = 125; // Skip scores and bonus stats
        for (let i = 0; i < 10; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 4).toHexNumber(),
                name: this.hi!.slice(byteToNames, 6).byteSkip(true).toString(this.charset, 65, 2)
            });
            currentByte += 4;
            byteToNames += 6;
        }
        return this;
    }
}
