import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'pang'
})
export default class Pang extends AbstractExtractor {
    protected charset = {
        0x7B: '&mid-dot;'
    };

    extract(): this {
        for (let i = 0; i < 9; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: parseInt(this.hi!.slice(i * 16, 3).readIntBE().toString(16)) * 10,
                name: this.hi!.slice(i * 16 + 3, 3).toString(this.charset)
            });
        }
        return this;
    }
}
