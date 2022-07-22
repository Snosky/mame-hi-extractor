import AbstractExtractor from '../AbstractExtractor';
import Extractor from '../Decorator/Extractor';

@Extractor({
    name: 'galaga',
    hi: true
})

export default class Galaga extends AbstractExtractor {

    protected charset = {
        0x24: ' ',
        0x2A: '.'
    };

    extract(): this {
        let currentByte = 0;
        for (let i = 0; i < 5; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 5).trim(0x24).decodeBCDLE(),
                name: ''
            });
            currentByte += 6;
        }
        for (let i = 0; i < 5; i++) {
            this.output.default[i].name = this.hi!.slice(currentByte, 3).toString(this.charset, 55);
            currentByte += 3;
        }
        return this;
    }
}
