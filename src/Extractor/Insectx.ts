import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'insectx'
})
export default class Insectx extends AbstractExtractor {
    extract(): any {
        for (let i = 0; i < 10; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: parseInt(this.hi!.slice(i * 8, 3).readIntBE().toString(16)) * 100,
                name: this.hi!.slice(i * 8 + 4, 3).toString()
            })
        }
    }
}
