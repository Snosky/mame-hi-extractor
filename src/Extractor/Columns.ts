import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'columns',
})
export default class Columns extends AbstractExtractor {
    extract(): this {
        let currentByte = 0;
        for (let i = 0; i < 9; i++) {
            currentByte++; // Skip header
            this.scores.default.push({
                rank: i + 1,
                name: this.hi!.slice(currentByte, 3).toString(),
                score: this.hi!.buffer.readIntBE(currentByte + 4, 4),
                // TODO : Extras
            });
            currentByte += 15;
        }
        return this;
    }
}
