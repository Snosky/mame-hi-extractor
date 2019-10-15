import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'superman'
})
export default class Superman extends AbstractExtractor {
protected charset = {
        0x5F: ' '
    };

    extract(): this {
        let scoreCurrentByte = 0;
        let nameCurrentByte = 7;
        for (let i = 0; i < 5; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(scoreCurrentByte, 3).readIntBE() * 100,
                name: this.hi!.slice(nameCurrentByte, 3).toString(this.charset)
            });
            scoreCurrentByte += 12;
            nameCurrentByte += 12;
        }
        return this;
    }
}
