import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'hsf2'
})
export default class Hsf2 extends AbstractExtractor {
    protected charset = {
        0x20: ' ',
        0x2E: '.',
    };

    extract(): any {
        let currentByte = 0;
        for (let i = 0; i++; i < 5) {
            this.scores.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 4).toHexNumber(),
                name: this.hi!.slice(currentByte + 4, 3).toString(this.charset)
            });
            currentByte += 8;
        }
    }
}
