import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";
import {eventNames} from "cluster";

@Extractor({
    name: 'galaga88'
})
export default class Galaga88 extends AbstractExtractor {
    extract(): any {
        let currentByte = 6;
        for (let i = 0; i < 8; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 6).nibbleSkip().toHexNumber() * 10,
//                stage: this.hi!.slice(currentByte + 6, 3).toHexNumber(),
                name: this.hi!.slice(currentByte + 9, 3).toString({},64)
            });
            currentByte += 12;
        }
    }
}
