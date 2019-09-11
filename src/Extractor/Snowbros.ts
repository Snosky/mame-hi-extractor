import Extractor from "../Decorator/Extractor";
import AbstractExtractor from "../AbstractExtractor";

@Extractor({
    name: 'snowbros'
})
export default class Snowbros extends AbstractExtractor {
    extract(): any {
        let currentByte = 4;
        for (let i = 0; i < 5; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 4).toHexNumber(),
                name: ''
            });
            currentByte += 4
        }
        currentByte += 10; // Skip floor
        for (let i = 0; i < 5; i++) {
            this.output.default[i].name = this.hi!.slice(currentByte, 6).byteSkip(false).toString16();
            currentByte += 6;
        }
    }
}
