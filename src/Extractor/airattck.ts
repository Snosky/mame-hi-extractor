import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'airattck'
})
export default class Airattck extends AbstractExtractor {
    protected charset = {
        0x8F: '-',
    };

    extract(): this {
        let currentByte = 0;
        for (let i = 0; i < 8; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 4).toHexNumber(),
                name: this.hi!.slice(currentByte + 8, 8).toString(this.charset, -41)
            });
            currentByte += 16;
        }
        return this;
    }
}
