import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'qbert',
    hi: false,
    nvram: 'nvram'
})
export default class Qbert extends AbstractExtractor {
    extract(): any {
        let currentByte = 2562;
        for (let i = 22; i >= 0; i--) {
            console.log(this.nvram!.slice(currentByte + 3, 7).byteFilter(0x24).nibbleSkip().buffer);
            this.scores.default.push({
                rank: i + 1,
                name: this.asciiOffset(this.nvram!.slice(currentByte, 3).buffer.toString(), 55),
                score: this.nvram!.slice(currentByte + 3, 7).byteFilter(0x24).nibbleSkip().toHexNumber()
            });
            currentByte += 10;
        }
    }
}
