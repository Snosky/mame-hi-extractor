import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'kungfum'
})
export default class Kungfum extends AbstractExtractor {
    extract(): any {
        for (let i = 19; i >= 0; i--) {
            this.scores.default.push({
                rank: Math.abs(i - 20),
                score: parseInt(this.hi!.slice(i * 6, 3).readIntBE().toString(16)) * 10,
                name: this.hi!.slice(i * 6 + 3, 3).toStringLE() // TODO : Charset
            })
        }

    }
}
