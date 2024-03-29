import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'darius'
})
export default class Darius extends AbstractExtractor {
protected charset = {
        0x00: ' '
    };
    extract(): this {
        let currentByte = 0;
        for (let i = 0; i < 50; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 4).readIntBE(),
                name: this.hi!.slice(currentByte + 4, 3).toString(this.charset)
            });
            currentByte += 18;
        }
        return this;
    }
}
