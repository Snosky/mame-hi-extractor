import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'defender',
    hi: false,
    nvram: 'nvram'
})
export default class Defender extends AbstractExtractor {
    extract(): this {
        let currentByte = 29; // Skip
        for (let i = 0; i < 8; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: this.nvram!.slice(currentByte, 6).decodeBCD(),
                name: this.nvram!.slice(currentByte + 6, 6).nibbleSkip(false).toString()
            });
            currentByte += 12;
        }
        return this;
    }
}
