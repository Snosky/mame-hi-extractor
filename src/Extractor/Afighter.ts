import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'afighter',
})
export default class Afighter extends AbstractExtractor {
    protected charset = {
        0x00: ' ',
        0x5C: '?',
        0x5D: '.',
    };

    extract(): any {
        let currentByte = 0;
        for (let i = 0; i < 10; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 4).toHexNumber(),
                name: this.hi!.slice(currentByte + 5, 3).toString(this.charset)
            });
            currentByte += 8;
        }
        return this;
    }
}
