import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'mslug2'
})
export default class Mslug2 extends AbstractExtractor {
    extract(): any {
        let currentByte = 0;
        for (let i = 0; i < 10; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: parseInt(this.hi!.slice(currentByte, 4).readIntBE().toString(16)),
                name: this.hi!.slice(currentByte + 4, 3).toString()
            });
            currentByte += 10;
        }
        return this;
    }
}
