import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'arabian'
})
export default class Arabian extends AbstractExtractor {
    protected charset = {
        0x00: ' ',
    };

    extract(): any {
        let currentByte = 0;
        for (let i = 0; i < 10; i++) {
            this.output.default.push({
                rank: i + 1,
                name: this.hi!.slice(currentByte, 3).toString(this.charset, 55),
                score: this.hi!.slice(currentByte + 3, 3).toHexNumber()
            });
            currentByte += 6;
        }
        return this;
    }
}
