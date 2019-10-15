import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'alphaxz'
})
export default class Alphaxz extends AbstractExtractor {
    protected charset = {
        0x2A: ' '
    };

    extract(): any {
        let scoreCurrentByte = 0;
        let nameCurrentByte = 30;
        for (let i = 0; i < 10; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(scoreCurrentByte, 3).toHexNumber() * 10,
                name: this.hi!.slice(nameCurrentByte, 3).toString(this.charset),
            });
            scoreCurrentByte += 3;
            nameCurrentByte += 10;
        }
        return this;
    }
}
