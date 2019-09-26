import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'airduel'
})
export default class Airduel extends AbstractExtractor {
    protected charset = {
        0x00: ' '
    };

    extract(): any {
        let currentByte = 0;
        for (let i = 0; i < 10; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 3).reverse().toHexNumber() * 100,
                name: this.hi!.slice(currentByte + 4, 9).toString(this.charset)
            });
            currentByte += 13;
        }
    }
}
