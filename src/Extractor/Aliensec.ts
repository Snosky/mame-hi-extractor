import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'aliensec'
})
export default class Aliensec extends AbstractExtractor {
    protected charset = {
        0x62: ' '
    };

    extract(): any {
        let currentByte = 0;
        for (let i = 0; i < 5; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 3).toHexNumber() * 10,
                name: this.hi!.slice(currentByte+ + 4, 5).toString(this.charset)
            });
            currentByte += 9 + 7;
        }
    }
}
