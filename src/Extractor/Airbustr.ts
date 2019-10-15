import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'airbustr',
})
export default class Airbustr extends AbstractExtractor {
    protected charset = {
        0x00: ' ',
        0x40: '@',
    };

    extract(): this {
        let currentByte = 0;
        for (let i = 0; i < 8; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 3).toHexNumber() * 10,
                name: this.hi!.slice(currentByte + 3, 4).toString(this.charset)
            });
            currentByte += 8;
        }
        return this;
    }
}
