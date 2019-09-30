import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'dorunrun'
})
export default class Dorunrun extends AbstractExtractor {
protected charset = {
        0x24: '?',
        0x25: ' ',
        0x5B: '.'
    };
    extract(): any {
        let currentByte = 0;
        for (let i = 0; i < 50; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 3).toHexNumber() * 10,
                name: this.hi!.slice(currentByte + 3, 3).toString(this.charset)
            });
            currentByte += 8;
        }

    }
}
