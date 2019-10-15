import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'ikari'
})
export default class Ikari extends AbstractExtractor {
    extract(): any {
        let currentByte = 0;
        for (let i = 0; i < 10; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 3).reverse().toHexNumber() * 10,
                name: this.hi!.slice(currentByte + 3, 5).toString()
            });
            currentByte += 8;
        }
        return this;
    }
}
