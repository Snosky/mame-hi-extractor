import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'mario'
})
export default class Mario extends AbstractExtractor {
    extract(): any {
        for (let i = 0; i < 5; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: parseInt(this.hi!.slice(i * 34 + 7, 6).nibbleSkip(false).readIntBE().toString(16)),
                name: this.hi!.slice(i * 34 + 15, 3).toString({}, 48)
            })
        }
    }
}
