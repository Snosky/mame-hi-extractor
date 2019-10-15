import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'batman'
})
export default class Batman extends AbstractExtractor {
    extract(): this {
        let currentByte = 0;
        for (let i = 0; i < 16; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 3).readIntBE(),
                name: this.hi!.slice(currentByte + 3, 2).decodeBase32(true)
            });
            currentByte += 5;
        }
        return this;
    }
}
