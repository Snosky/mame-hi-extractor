import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'ddsom'
})
export default class Ddsom extends AbstractExtractor {
    extract(): any {
        for (let i = 0; i < 10; i++) {
            this.scores.default.push({
                rank: i + 1,
                name: this.asciiOffset(this.hi!.slice(i * 14 + 2, 6).buffer.toString(), -16),  // TODO : Charset
                score: parseInt(this.hi!.buffer.readIntBE(i * 14 + 8, 4).toString(16))
            })
        }
    }
}
