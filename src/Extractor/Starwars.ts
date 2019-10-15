import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'starwars',
    hi: false,
    nvram: 'x2212'
})
export default class Starwars extends AbstractExtractor {
    protected charset = {
        0x00: ' '
    };

    extract(): this {
        for (let i = 0; i < 3; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: parseInt(this.nvram!.slice(8 + i * 8, 8).nibbleSkip().readIntBE().toString(16)),
                name: this.nvram!.slice(32 + i * 6, 6).nibbleSkip().toString(this.charset, 64)
            });
        }
        return this;
    }
}
