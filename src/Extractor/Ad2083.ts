import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'ad2083'
})
export default class Ad2083 extends AbstractExtractor {
    extract(): any {
        let currentByte = 0;
        for (let i = 0; i < 20; i++) {
            this.output.default.push({
                rank: i + 1,
                name: this.hi!.slice(currentByte, 2).decodeBase32(),
                score: this.hi!.slice(currentByte + 2, 3).reverse().toHexNumber()
            });
            currentByte += 5;
        }
    }
}
