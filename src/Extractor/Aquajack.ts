import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'aquajack'
})
export default class Aquajack extends AbstractExtractor {
    protected charset = {
        0x5E: ' ',
    };

    extract(): any {
        let scoreCurrentByte = 4;
        let nameCurrentByte = 64;
        for (let i = 0; i < 10; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(scoreCurrentByte, 4).toHexNumber(),
                name: this.hi!.slice(nameCurrentByte, 3).toString(this.charset)
            });
            scoreCurrentByte += 4;
            nameCurrentByte += 4;
        }
    }
}
