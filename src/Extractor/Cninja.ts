import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'cninja'
})
export default class Cninja extends AbstractExtractor {
protected charset = {
        0x5B: ' '
    };
    extract(): any {
        let currentByte = 15;
        for (let i = 0; i < 20; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte + 5, 3).toHexNumber(),
                name: this.hi!.slice(currentByte, 3).toString(this.charset)
            });
            currentByte += 8;
        }
    }
}
