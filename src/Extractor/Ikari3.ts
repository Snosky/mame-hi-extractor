import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'ikari3'
})
export default class Ikari3 extends AbstractExtractor {
    extract(): any {
        let currentByte = 8;
        for (let i = 0; i < 10; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 4).toHexNumber(),
                name: this.hi!.slice(currentByte + 4, 3).toString({},65)
            });
            currentByte += 8;
        }
    }
}
