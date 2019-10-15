import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'armedf'
})
export default class Armedf extends AbstractExtractor {
    protected charset = {
        0x5B: ' ',
        0x5C: ' ',
        0x5D: '&',
        0x5E: '.'
    };

    extract(): any {
        let currentByte = 0;
        for (let i = 0; i < 10; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 4).toHexNumber(),
                name: this.hi!.slice(currentByte + 4, 3).toString(this.charset)
            });
            currentByte += 8;
        }
        return this;
    }
}
