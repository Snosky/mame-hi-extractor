import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'agallet'
})
export default class Agallet extends AbstractExtractor {
    extract(): any {
        let scoreCurrentByte = 10;
        let nameCurrentByte = 50;
        for (let i = 0; i < 10; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(scoreCurrentByte, 4).toHexNumber(),
                name: this.hi!.slice(nameCurrentByte, 3).toString()
            });
            scoreCurrentByte += 4;
            nameCurrentByte += 3;
        }
        return this;
    }
}
