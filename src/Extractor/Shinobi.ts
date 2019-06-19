import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'shinobi'
})
export default class Shinobi extends AbstractExtractor {
    protected charset = {
        0x22: '.',
        0x23: '\'',
        0x25: '/',
        0x26: '(',
        0x27: ')',
        0x28: '-',
        0x29: '&man;',
        0x2A: '&woman;',
        0x2B: '&mid-dot;',
        0x2E: '=',
    };

    extract(): any {
        for (let i = 0; i < 20; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: parseInt(this.hi!.slice(i * 8, 4).readIntBE().toString(16)),
                name: this.hi!.slice(i * 8 + 5, 3).toString(this.charset)
            });
        }
    }
}
