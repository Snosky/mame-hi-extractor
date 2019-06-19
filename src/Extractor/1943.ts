import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: '1943',
})
export default class Extractor1943 extends AbstractExtractor {
    protected charset = {
        0x24: ' ',
        0x2B: '.',
        0x2C: ':',
        0x3A: '&',
        0x62: '&black-heart;',
        0x64: '&black-star;', // TODO : Special char
        0x66: '!'
    };

    extract(): any {
        for (let i = 0; i < 6; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: this.hi!.slice(i * 16, 8).decodeBCD(),
                name: this.hi!.slice(i * 16 + 8, 3).toString(this.charset, 55)
            })
        }
    }
}
