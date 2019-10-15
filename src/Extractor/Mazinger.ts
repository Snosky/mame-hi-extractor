import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'mazinger'
})
export default class Mazinger extends AbstractExtractor {
    extract(): this {
        let currentByte = 4;
        for (let i = 0; i < 8; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 4).toHexNumber(),
                name: this.hi!.slice(currentByte + 4, 3).toString()
            });
            currentByte += 8;
        }
        return this;
    }
}
