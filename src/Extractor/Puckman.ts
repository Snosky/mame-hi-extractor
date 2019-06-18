import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'puckman'
})
export default class Puckman extends AbstractExtractor {
    extract(): any {
        this.scores.default.push({
            rank: 1,
            score: parseInt(this.hi!.slice(0, 3).readIntLE().toString(16)),
            name: ''
        })
    }
}
