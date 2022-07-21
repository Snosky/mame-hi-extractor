import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'raiden'
})
export default class Raiden extends AbstractExtractor {
    protected charset = {
        0x00: ' ',
        0x2e: '.',
        0x5b: '!',
        0x5c: '?',
        0x5d: '-'
};

extract(): this {
        let currentByte = 0;
        for (let i = 0; i < 9; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 2).byteSwap(2).buffer.readUInt16BE(),
                name: this.hi!.slice(currentByte + 6, 3).toString(this.charset)
            });
            currentByte += 10;
        }
        return this;
    }
}