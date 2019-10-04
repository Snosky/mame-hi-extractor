import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'armorcar'
})
export default class Armorcar extends AbstractExtractor {
    protected charset = {
        0x40: ' '
    };

    extract(): any {
        let currentByte = 0;
        for (let i = 0; i < 10; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 3).toHexNumber(),
                name: this.hi!.slice(currentByte + 3, 3).toString(this.charset)
            });
            currentByte += 6;
        }
    }
}
