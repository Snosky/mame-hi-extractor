import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'tetrisp'
})
export default class Tetris extends AbstractExtractor {
    protected charset = {
        0x1B: '.',
        0x1C: '!',
        0x1D: '?',
        0x1E: '-'
};

extract(): this {

        let currentByte = 0;
        for (let i = 0; i < 5; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 4).readIntLE(),
                name: this.hi!.slice(currentByte + 12, 9).byteFilter(0x00).toString(this.charset, 64),
            });
            currentByte += 32;
        }

        this.output.extras = {'puzzle': []};
        for (let i = 0; i < 5; i++) {
            this.output.extras['puzzle'].push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 4).readIntLE(),
                name: this.hi!.slice(currentByte + 12, 9).byteFilter(0x00).toString(this.charset, 64)
            });
            currentByte += 32;
        }

        return this;
    }
}