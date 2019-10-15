import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'avsp'
})
export default class Avsp extends AbstractExtractor {
    extract(): any {
        let currentByte = 0;
        for (let i = 0; i < 50; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte + 4, 4).toHexNumber(),
                name: this.hi!.slice(currentByte + 8, 3).toString()
            });
            currentByte += 16;
        }
        return this;
    }
}
