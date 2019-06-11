import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'galaxian'
})
export default class Galaxian extends AbstractExtractor {
    extract(): any {
        this.scores.default.push({
            rank: 1,
            score: parseInt(this.hi!.buffer.readIntLE(0, 3).toString(16)),
            name: ''
        })
    }
}
