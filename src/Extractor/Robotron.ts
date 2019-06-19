import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'robotron',
    hi: false,
    nvram: 'nvram'
})
export default class Robotron extends AbstractExtractor {
    protected charset = {
        0x3A: ' '
    };

    extract(): any {
        let currentByte = 306;

        this.scores.default.push({
            rank: 1,
            name: this.nvram!.slice(currentByte, 6).nibbleSkip().toString(this.charset),
            score: parseInt(this.nvram!.slice(currentByte + 47, 7).nibbleSkip().readIntBE().toString(16))
        });
        currentByte += 54;

        for (let i = 0; i < 37; i++) {
            this.scores.default.push({
                rank: i + 2,
                name: this.nvram!.slice(currentByte, 6).nibbleSkip().toString(this.charset),
                score: parseInt(this.nvram!.slice(currentByte + 7, 7).nibbleSkip().readIntBE().toString(16))
            });
            currentByte += 14;
        }
    }
}
