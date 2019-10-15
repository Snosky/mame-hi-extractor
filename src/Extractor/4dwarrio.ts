import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: '4dwarrio'
})
export default class Extractor4dwarrio extends AbstractExtractor {
    protected charset = {
        0x21: ' ',
        0x29: ' ',
        0x6E: '/',
    };

    extract(): any {
        let currentByte = 0;
        for (let i = 0; i < 10; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 3).reverse().toHexNumber(),
                name: this.hi!.slice(currentByte + 3, 3).toString(this.charset)
            });
            currentByte += 16;
        }
        return this;
    }
}
