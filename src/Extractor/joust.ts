import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'joust',
    hi: false,
    nvram: 'nvram'
})
export default class Joust extends AbstractExtractor {
    protected charset = {
        0x0A: ' ',
        0x32: ':'
    };

    extract(): this {
        // Use only nvram, because hi is a duplicate of extra score 'Daily'

        let currentByte = 318; // Skip debug values
        this.output.default.push({
            rank: 1,
            name: this.nvram!.slice(currentByte, 40).nibbleSkip(false).toString(this.charset, 54),
            score: parseInt(this.nvram!.slice(currentByte + 47, 7).nibbleSkip(false).readIntBE().toString(16))
        });
        currentByte += 54;
        for (let i = 0; i < 40; i++) {
            this.output.default.push({
                rank: i + 2,
                name: this.nvram!.slice(currentByte, 6).nibbleSkip(false).toString(this.charset, 54),
                score: parseInt(this.nvram!.slice(currentByte + 7, 7).nibbleSkip(false).readIntBE().toString(16))
            });
            currentByte += 14;
        }

        this.scores.extras = {daily: []};
        for (let i = 0; i < 6; i++) {
            this.scores.extras.daily.push({
                rank: i + 1,
                name: this.nvram!.slice(currentByte, 6).nibbleSkip(false).toString(this.charset, 54),
                score: parseInt(this.nvram!.slice(currentByte + 7, 7).nibbleSkip(false).readIntBE().toString(16))
            });
            currentByte += 14
        }
        return this;
    }
}
