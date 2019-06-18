import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'scontra'
})
export default class Scontra extends AbstractExtractor {
    extract(): any {
        for (let i = 0; i < 10; i++) {
            this.scores.default.push({
                rank: i + 1,
                name: this.asciiOffset(this.hi!.slice(i * 8, 3).buffer.toString(), 48), // TODO : Charset
                score: parseInt(this.hi!.slice(i * 8 + 4, 4).readIntBE().toString(16))
            });
        }
    }
}
