import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'mappy'
})
export default class Mappy extends AbstractExtractor {
    protected charset = {
        0x5F: '.'
    };

    extract(): any {
        for (let i = 0; i < 5; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: parseInt(this.hi!.slice(i * 8, 3).readIntBE().toString(16)) * 10,
                name: this.hi!.slice(i * 8 + 5, 3).toString(this.charset)
                // TODO : Extras
            })
        }
    }
}
