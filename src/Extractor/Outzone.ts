import Extractor from "../Decorator/Extractor";
import AbstractExtractor from "../AbstractExtractor";

@Extractor({
    name: 'outzone'
})
export default class Outzone extends AbstractExtractor {
    protected charset = {
        0x00: ' '
    };

    extract(): any {
        let currentByte = 4;
        for (let i = 0; i < 5; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 4).toHexNumber(),
                name: ''
            });
            currentByte += 4
        }
        for (let i = 0; i < 5; i++) {
            this.output.default[i].name = this.hi!.slice(currentByte, 12)
                .byteMask('FF000000FF000000FF000000').toString(this.charset);
            currentByte += 16;
        }
        return this;
    }
}
