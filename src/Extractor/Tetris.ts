import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'tetris'
})
export default class Tetris extends AbstractExtractor {
    protected charset = {
        0x00: ' ',
        0x5E: '@'
    };

    extract(): any {
        for (let i = 0; i < 10; i++) {
            this.scores.default.push({
                rank: i + 1,
                name: this.hi!.slice(i * 10, 3).toString(this.charset),
                score: this.hi!.slice(i * 10 + 4, 4).readIntBE()
            })
        }
    }
}
