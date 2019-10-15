import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'mwalk'
})
export default class Mwalk extends AbstractExtractor {
    extract(): this {
        for (let i = 0; i < 10; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: parseInt(this.hi!.slice(i * 8, 4).readIntBE().toString(16)),
                name: this.hi!.slice(i * 8 + 5, 3).toString()
            });
        }
        return this;
    }
}
