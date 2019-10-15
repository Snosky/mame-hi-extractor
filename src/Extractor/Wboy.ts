import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'wboy'
})
export default class Wboy extends AbstractExtractor {
    protected charset = {
        0x5C: '&ring;',
        0x5E: '&kiss;',
        0x7D: '&woman;',
        0x7E: '&man;',
        0x7F: '&black-heart', // TODO : Special char
    };

    extract(): any {
        for (let i = 0; i < 20; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: parseInt(this.hi!.slice(i * 16 + 2, 6).byteFilter(0x20).nibbleSkip().readIntBE().toString(16)) * 10,
                name: this.hi!.slice(i * 16 + 8, 3).toString(this.charset)
            })
        }
        return this;
    }
}
