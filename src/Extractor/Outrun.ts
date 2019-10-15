import Extractor from "../Decorator/Extractor";
import AbstractExtractor from "../AbstractExtractor";

@Extractor({
    name: 'outrun'
})
export default class Outrun extends AbstractExtractor {
    protected charset = {
        0x5B: '.'
    };

    extract(): any {
        let currentByte = 0;
        for (let i = 0; i < 7; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 4).toHexNumber() * 100,
                name: this.hi!.slice(currentByte + 4, 3).toString(this.charset)
            })
            currentByte += 14
        }
        return this;
    }
}
