import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'pacmania'
})
export default class Pacmania extends AbstractExtractor {
    extract(): any {
        for (let i = 0; i < 10; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: parseInt(this.hi!.slice(i * 8, 4).readIntBE().toString(16)) * 10,
                name: this.hi!.slice(i * 8 + 5, 3).buffer.toString() // TODO : Charset
            });
        }
    }
}
