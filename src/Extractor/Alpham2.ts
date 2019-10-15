import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'alpham2',
    hi: false,
    nvram: 'saveram'
})
export default class Alpham2 extends AbstractExtractor {
    extract(): any {
        this.nvram = this.nvram!.byteSwap(2);
        let scoreCurrentByte = 904;
        let nameCurrentByte = 944;
        for (let i = 0; i < 10; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.nvram.slice(scoreCurrentByte, 4).toHexNumber(),
                name: this.nvram.slice(nameCurrentByte, 3).toString()
            });
            scoreCurrentByte += 4;
            nameCurrentByte += 4;
        }
        return this;
    }
}
