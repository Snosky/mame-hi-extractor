import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

// TODO : Not tested
@Extractor({
    name: 'pengo'
})
export default class Pengo extends AbstractExtractor {
    protected charset = {
        0x5B: '.'
    };

    extract(): any {
        for (let i = 4; i >= 0; i--) {
            this.scores.default.push({
                rank: i + 1,
                score: this.hi!.slice(i * 6, 2).readIntLE() * 10,
                name: this.hi!.slice(i * 6 + 3, 3).toString(this.charset)
            });
        }
        return this;
    }
}
