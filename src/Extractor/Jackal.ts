import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'jackal'
})
export default class Jackal extends AbstractExtractor {
    extract(): any {
        for (let i = 0; i < 5; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: parseInt(this.hi!.slice(i * 8, 4).readIntBE().toString(16)),
                name: this.asciiOffset(this.hi!.slice(i * 8 + 4, 3).buffer.toString(), 48) // TODO : Charset
            })
        }
    }
}
