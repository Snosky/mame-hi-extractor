import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'gunsmoke'
})
export default class Gunsmoke extends AbstractExtractor {
    extract(): any {
        let currentBytes = 0;
        for (let i = 0; i < 5; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: parseInt(this.hi!.slice(currentBytes + 1, 7).nibbleSkip(false).readIntBE().toString(16)),
                name: this.asciiOffset(this.hi!.slice(currentBytes + 10, 6).byteSkip(false).buffer.toString(), 55),
            });
            currentBytes += 16;
        }
    }
}
