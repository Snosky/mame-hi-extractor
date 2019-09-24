import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'mercs'
})
export default class Mercs extends AbstractExtractor {
    extract(): any {
        let currentByte = 0;
        for (let i = 0; i < 10; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 8).nibbleSkip().toHexNumber(),
                name: this.hi!.slice(currentByte + 8, 3).toString()
            });
            currentByte += 16;
        }
    }
}
