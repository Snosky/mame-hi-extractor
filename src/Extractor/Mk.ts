import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'mk',
    hi: false,
    nvram: 'nvram'
})
export default class Mk extends AbstractExtractor {
    extract(): this {
        let currentByte = 6144; // Skip first 6144 bytes
        for (let i = 0; i < 15; i++) {
            this.scores.default.push({
                rank: i + 1,
                name: this.nvram!.slice(currentByte, 6).byteSkip(true).toString({}, 65),
                score: this.nvram!.slice(currentByte + 10, 8).byteSkip(true).readIntLE()
            });
            currentByte += 18;
        }
        return this;
    }
}
