import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'demonwld'
})
export default class Demonwld extends AbstractExtractor {
protected charset = {
        0x5B: '&black-heart;'
    };
    extract(): any {
        let currentByte = 0;
        for (let i = 0; i < 20; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 4).toHexNumber(),
                name: '---'
            });
            currentByte += 4;
        }
        currentByte = 80;
        for (let i = 0; i < 20; i++) {
            this.output.default[i].name = this.hi!.slice(currentByte, 6).byteSkip(false).toString(this.charset);
            currentByte += 6;
        }

    }
}
