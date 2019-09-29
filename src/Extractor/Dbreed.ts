import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'dbreed'
})
export default class Dbreed extends AbstractExtractor {
    extract(): any {
        let currentByte = 0;
        for (let i = 0; i < 10; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 3).byteSwap(2).toHexNumber(),
                name: this.hi!.slice(currentByte + 4, 9).toString()
            });
            currentByte += 13;
        }
    }
}
