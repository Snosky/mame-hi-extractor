import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'actionhw'
})
export default class Actionhw extends AbstractExtractor {
    extract(): this {
        let currentByte = 0;
        for (let i = 0; i < 5; i++) {
            this.output.default.push({
                rank: i + 1,
                name: this.hi!.slice(currentByte, 3).toString(),
                score: this.hi!.slice(currentByte + 4, 2).readIntBE() * 100
            });
            currentByte += 8;
        }
        return this;
    }
}
