import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";
import {Score} from "../interfaces";

@Extractor({
    name: 'galaga88'
})
export default class Galaga88 extends AbstractExtractor {
    extract(withExtra = false): this {
        let currentByte = 6;
        for (let i = 0; i < 8; i++) {
            let score: Score = {
                rank: i + 1,
                score: this.hi!.slice(currentByte, 6).nibbleSkip().toHexNumber() * 10,
                name: this.hi!.slice(currentByte + 9, 3).toString({},64),
            };
            if (withExtra) {
                score.extra = { stage: this.hi!.slice(currentByte + 6, 3).toHexNumber().toString().replace(/0+/, '-') }
            }
            this.output.default.push(score);
            currentByte += 12;
        }
        return this;
    }
}
