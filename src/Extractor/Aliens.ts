import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'aliens',
})
export default class Aliens extends AbstractExtractor {
    protected charset = {
        0x3C: '-',
        0x3D: '.',
        0x3E: '?',
        0x3F: '!',
        0x40: ' ',
        0x5B: '\'',
    };

    extract(): any {
        let currentByte = 0;
        for (let i = 0; i < 8; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 4).toHexNumber(),
                name: this.hi!.slice(currentByte + 4, 3).toString(this.charset)
            });
            currentByte += 7;
        }
    }
}
