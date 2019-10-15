import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'ffight'
})
export default class Ffight extends AbstractExtractor {
    extract(): this {
        let currentByte = 20;
        for (let i = 0; i < 5; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 4).toHexNumber(),
                name: this.hi!.slice(currentByte + 4, 3).toString()
            });
            currentByte += 8;
        }
        return this;
    }
}
