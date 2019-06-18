import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'shinobi'
})
export default class Shinobi extends AbstractExtractor {
    extract(): any {
        for (let i = 0; i < 20; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: parseInt(this.hi!.slice(i * 8, 4).readIntBE().toString(16)),
                name: this.hi!.slice(i * 8 + 5, 3).buffer.toString() // TODO :Charset
            });
        }
    }
}
