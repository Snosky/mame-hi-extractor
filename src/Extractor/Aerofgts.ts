import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'aerofgts',
    hi: false,
    nvram: 'at28c16'
})
export default class Aerofgts extends AbstractExtractor {
    extract(): any {
        let currentByte = 8;
        for (let i = 0; i < 5; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.nvram!.slice(currentByte, 4).readIntLE(),
                name: this.nvram!.slice(currentByte + 4, 3).toString()
            });
            currentByte += 12;
        }
        return this;
    }
}
