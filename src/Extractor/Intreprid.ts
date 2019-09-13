import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'intrepid'
})
export default class Intreprid extends AbstractExtractor {
    protected charset = {
        0xFD: '-',
        0x24: ' ',
        0x01: '1',
        0x02: '2',
        0x03: '3',
        0x04: '4',
        0x05: '5',
        0x06: '6',
        0x07: '7',
        0x08: '8',
        0x09: '9',
    };

    extract(): any {
        let currentByte = 1;
        for (let i = 0; i < 10; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 3).byteSwap(3).toHexNumber() * 10,
                name: this.hi!.slice(currentByte + 3, 3).toString(this.charset, 55)
            });
            currentByte += 6;
        }
    }
}
