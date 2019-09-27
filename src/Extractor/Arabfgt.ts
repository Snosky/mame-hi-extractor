import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'arabfgt'
})
export default class Arabfgt extends AbstractExtractor {
    protected charset = {
        0x00: ' ',
        0x2E: '.',
    };

    extract(): any {
        let currentByte = 0;
        for (let i = 0; i < 5; i++) {
            this.output.default.push({
                rank: i + 1,
                name: this.hi!.slice(currentByte, 3).toString(this.charset),
                score: this.hi!.slice(currentByte + 4, 4).readIntLE()
            });
            currentByte += 16;
        }
    }
}
