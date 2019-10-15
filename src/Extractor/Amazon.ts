import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'amazon'
})
export default class Amazon extends AbstractExtractor {
    protected charset = {
        0x00: ' ',
        0x01: '!',
        0x0E: '.',
        0x11: '&',
        0x23: ' ',
    };

    extract(): any {
        let currentByte = 0;
        for (let i = 0; i < 5; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 4).toHexNumber(),
                name: this.hi!.slice(currentByte + 4, 10).toString(this.charset),
            });
            currentByte += 14;
        }
        return this;
    }
}
