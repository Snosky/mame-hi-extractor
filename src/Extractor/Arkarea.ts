import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'arkarea'
})
export default class Arkarea extends AbstractExtractor {
    protected charset = {
        0x00: ' ',
        0x26: ' ',
        0x27: ' ',
    };

    extract(): any {
        let nameCurrentByte = 0;
        let scoreCurrentByte = 36;
        for (let i = 0; i < 5; i++) {
            this.output.default.push({
                rank: i + 1,
                name: this.hi!.slice(nameCurrentByte, 6).toString(this.charset),
                score: parseInt(this.hi!.slice(scoreCurrentByte, 6).toString({0x00: '0'})) * 100,
            });
            nameCurrentByte += 6;
            scoreCurrentByte += 6;
        }
    }
}
