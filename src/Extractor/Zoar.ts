import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'zoar'
})
export default class Zoar extends AbstractExtractor {
    extract(): any {
        let scoreCurrentByte = 3;
        let nameCurrentByte = 18;
        for (let i = 0; i < 5; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(scoreCurrentByte, 3).reverse().toHexNumber(),
                name: this.hi!.slice(nameCurrentByte, 3).toString()
            });
            scoreCurrentByte += 3;
            nameCurrentByte += 3;
        }
    }
}
