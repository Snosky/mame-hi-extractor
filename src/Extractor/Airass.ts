import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'airass'
})
export default class Airass extends AbstractExtractor {
    protected charset = {
        0x5B: '(',
        0x5C: '#',
        0x5D: ')',
        0x5E: '^',
        0x61: ' ',
        0x62: ' ',
        0x63: ' ',
        0x64: ' ',
        0x65: ' ',
    };

    extract(): any {
        let currentByte = 0;
        for (let i = 0; i < 10; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 4).reverse().toHexNumber() * 10,
                name: this.hi!.slice(currentByte + 4, 10).toString(this.charset).trimRight()
            });
            currentByte += 14;
        }
        return this;
    }
}
