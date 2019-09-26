import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'ajax',
})
export default class Ajax extends AbstractExtractor {
    protected charset = {
        0x2B: '.',
        0x2C: '!',
    };

    extract(): any {
        let currentByte = 0;
        for (let i = 0; i < 10; i++) {
            this.output.default.push({
                rank: i + 1,
                name: this.hi!.slice(currentByte, 3).toString(this.charset, 48),
                score: this.hi!.slice(currentByte + 4, 4).toHexNumber()
            });
            currentByte += 8;
        }
    }
}
