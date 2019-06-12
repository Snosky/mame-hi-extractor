import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

/* FIXME - Not tested */
@Extractor({
    name: 'jack'
})
export default class Jack extends AbstractExtractor {
    extract(): any {
        for (let i = 0; i < 10; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: this.hi!.slice(i * 9, 6).decodeBCD(),
                name: this.hi!.slice(i * 9 + 6, 3).buffer.toString() // TODO :Charset
            });
        }
    }
}
