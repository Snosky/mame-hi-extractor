import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'donpachi'
})
export default class Donpachi extends AbstractExtractor {
    protected charset = {
        0x00: ' ',
        0x38: '.'
    };

    extract(): any {
        for (let i = 0; i < 5; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: parseInt(this.hi!.buffer.readIntBE(4 + (i * 4), 4).toString(16)),
                name: this.hi!.slice(24 + (i * 6), 6).byteSkip(false).byteMap(byte => byte / 2).toString(this.charset, -9)
                // TODO : Extras
            })
        }
        return this;
    }
}
