import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

// TODO : Not tested
@Extractor({
    name: 'pacland'
})
export default class Pacland extends AbstractExtractor {
    extract(): any {
        for (let i = 0; i < 5; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: parseInt(this.hi!.slice(i * 16, 4).readIntBE().toString(16)),
                name: this.hi!.slice(i * 16 + 5, 5).buffer.toString() // TODO : Charset
            });
        }
    }
}
