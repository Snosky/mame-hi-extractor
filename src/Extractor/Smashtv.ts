import Extractor from "../Decorator/Extractor";
import AbstractExtractor from "../AbstractExtractor";

@Extractor({
    name: 'smashtv',
    hi: false,
    nvram: 'nvram'
})
export default class Smashtv extends AbstractExtractor {
    extract(): this {
        let currentByte = 16400;
        for (let i = 0; i < 10; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: parseInt(this.nvram!.slice(currentByte, 8).byteSkip(true).readIntBE().toString(16)),
                name: this.nvram!.slice(currentByte + 8, 6).byteSkip(true).toString()
            });
            currentByte += 16;
        }
        return this;
    }
}
