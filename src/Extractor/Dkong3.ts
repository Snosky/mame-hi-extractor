import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'dkong3'
})
export default class Dkong3 extends AbstractExtractor {
    extract(): any {
        for (let i = 0; i < 7; i++){
            const score = parseInt(this.hi!.buffer.readIntLE(34 * i + 29, 3).toString(16));
            if (!score) {
                continue;
            }
            const name = this.hi!.slice(34 * i + 15, 3).buffer.toString(); // TODO : Charset

            this.scores.default.push({
                rank: i + 1,
                score: score,
                name: name,
            });
        }
    }
}
