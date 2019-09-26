import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'appoooh'
})
export default class Appoooh extends AbstractExtractor {
    protected charset = {
        0x00: ' ',
        0x3F: ' ',
        0x40: ' ',
    };

    extract(): any {
        let currentByte = 10;
        for (let i = 0; i < 21; i++) {
            this.output.default.push({
                rank: i + 1,
                name: this.hi!.slice(currentByte, 3).toString(this.charset),
                score: this.hi!.slice(currentByte + 3, 6).decodeBCD()
            });
            currentByte += 11;
        }
    }
}
