import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'alexkidd'
})
export default class Alexkidd extends AbstractExtractor {
    protected charset = {
        0x00: ' ',
        0x3E: '-',
        0x5B: '.',
        0x5E: '!',
        0x5F: '&',
    };

    extract(): this {
        let currentByte = 0;
        for (let i = 0; i < 7; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 4).toHexNumber(),
                name: this.hi!.slice(currentByte + 5, 3).toString(this.charset)
            });
            currentByte += 8;
        }
        return this;
    }
}
