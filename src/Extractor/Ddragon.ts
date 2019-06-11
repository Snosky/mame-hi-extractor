import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'ddragon'
})
export default class Ddragon extends AbstractExtractor {
    extract(): any {
        for (let i = 0; i < 5; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: parseInt(this.hi!.buffer.readIntBE(i * 6, 3).toString(16)),
                name: this.asciiOffset(this.hi!.slice(i * 6 + 3, 3).buffer.toString(), 32) // TODO : charset
            });
        }
    }
}
