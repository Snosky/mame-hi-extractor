import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'zoar'
})
export default class Zoar extends AbstractExtractor {
    extract(): any {
        let currentByte = 3;
        for (let i = 0; i < 5; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 3).toHexNumber(),
                name: ''
            });
            currentByte += 3;
        }
        currentByte = 18; // Skip floor
        for (let i = 0; i < 5; i++) {
            this.output.default[i].name = this.hi!.slice(currentByte, 3).toString();
            currentByte += 3;
        }

    }
}
