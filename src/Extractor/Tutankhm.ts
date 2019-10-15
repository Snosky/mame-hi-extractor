import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";
// TODO : Not tested
@Extractor({
    name: 'tutankhm'
})
export default class Tutankhm extends AbstractExtractor {
    extract(): this {
        for (let i = 0; i < 7; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: parseInt(this.hi!.slice(i * 6, 3).readIntBE().toString(16)),
                name: this.hi!.slice(i * 6 + 3, 3).toString()
            });
        }
        return this;
    }
}
