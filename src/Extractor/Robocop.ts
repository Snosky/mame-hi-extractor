import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

// TODO : Not tested
@Extractor({
    name: 'robocop'
})
export default class Robocop extends AbstractExtractor {
    extract(): any {
        for (let i = 0; i < 10; i++) {
            this.scores.default.push({
                rank: i + 1,
                name: this.hi!.slice(i * 16, 8).buffer.toString(), // TODO: Charset
                score: parseInt(this.hi!.slice(i * 16 + 8, 4).readIntBE().toString(16))
            });
        }
    }
}