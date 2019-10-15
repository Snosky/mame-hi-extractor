import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'abcop',
    hi: false,
    nvram: 'mainpcb_backup1'
})
export default class Abcop extends AbstractExtractor {
    extract(): any {
        let currentByte = 268;
        this.nvram = this.nvram!.byteSwap(2);
        for (let i = 0; i < 7; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.nvram!.slice(currentByte, 4).toHexNumber(),
                name: this.nvram!.slice(currentByte + 4, 4).toString()
            });
            currentByte += 12;
        }
        return this;
    }
}
