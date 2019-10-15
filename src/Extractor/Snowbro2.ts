import Extractor from "../Decorator/Extractor";
import AbstractExtractor from "../AbstractExtractor";

@Extractor({
    name: 'snowbro2'
})
export default class Snowbro2 extends AbstractExtractor {
    extract(): any {
        for (let i = 0; i < 5; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: parseInt(this.hi!.slice(i * 4, 4).readIntBE().toString(16)),
                name: this.hi!.slice(i * 4 + 20 + 1, 3).toString()
            });
        }
        return this;
    }
}
