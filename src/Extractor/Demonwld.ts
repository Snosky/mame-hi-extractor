import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'demonwld'
})
export default class Demonwld extends AbstractExtractor {
protected charset = {
        0x5B: ' '
    };
    extract(): any {
        let scoreCurrentByte = 0;
        let nameCurrentByte = 80;
        for (let i = 0; i < 20; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(scoreCurrentByte, 4).toHexNumber(),
                name: this.hi!.slice(nameCurrentByte, 6).byteSkip(false).toString(this.charset)
            });
            scoreCurrentByte += 4;
            nameCurrentByte += 6;
        }
    }
}
