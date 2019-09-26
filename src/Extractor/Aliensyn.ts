import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'aliensyn'
})
export default class Aliensyn extends AbstractExtractor {
    protected charset = {
        0x00: ' ',
        0x5B: '?',
        0x5C: '.',
    };

    extract(): any {
        let currentByte = 0;
        for (let i = 0; i < 7; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 4).toHexNumber(),
                name: this.hi!.slice(currentByte + 5, 3).toString(this.charset)
            });
            currentByte += 10;
        }
    }
}
