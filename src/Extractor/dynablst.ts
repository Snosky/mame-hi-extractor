import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'dynablst'
})
export default class Raiden extends AbstractExtractor {
    protected charset = {
        /*0x63: '♥'*/
};

extract(): this {
        let currentByte = 0;
        for (let i = 0; i < 7; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte + 2, 3).byteSwap(3).toHexNumber() * 10,
                name: this.hi!.slice(currentByte + 5, 6).toString(this.charset)
            });
            currentByte += 11;
        }
        return this;
    }
}
