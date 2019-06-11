import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: '1943',
})
export default class Extractor1943 extends AbstractExtractor {
    extract(): any {
        for (let i = 0; i < 6; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: this.hi!.slice(i * 16, 8).decodeBCD(),
                name: this.asciiOffset(this.hi!.slice(i * 16 + 8, 3).buffer.toString(), 55)
                // TODO : Charset
            })
        }
    }
}
