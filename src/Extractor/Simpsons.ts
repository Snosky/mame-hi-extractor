import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'simpsons'
})
export default class Simpsons extends AbstractExtractor {
    extract(): any {
        for (let i = 0; i < 10; i++) {
            this.scores.default.push({
                rank: i + 1,
                name: this.hi!.slice(i * 8, 3).buffer.toString(), // TODO :Charset
                score: parseInt(this.hi!.slice(i * 8 + 3, 2).readIntBE().toString(16))
            });
        }
    }
}
