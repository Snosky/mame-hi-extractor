import AbstractExtractor from '../AbstractExtractor';
import Extractor from '../Decorator/Extractor';

@Extractor({
    name: '10yard',
    hi: true
})
export default class Extractor10yard extends AbstractExtractor {
    protected charset = {
        0x5B: '.',
        0x5C: ' ',
    };

    extract(): this {
        let currentByte = 0;
        for (let i = 0; i < 23; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 3).reverse().toHexNumber(),
                name: this.hi!.slice(currentByte + 3, 3).toString(this.charset)
            });
            currentByte += 6;
        }
        return this;
    }
}
