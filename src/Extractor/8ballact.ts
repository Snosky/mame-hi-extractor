import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: '8ballact'
})
export default class Extractor8ballact extends AbstractExtractor {
    protected charset = {
        0x00: ' ',
    };

    protected scoreCharset = {
        0x00: '0',
        0x1B: '0',
        0x1C: '1',
        0x1D: '2',
        0x1E: '3',
        0x1F: '4',
        0x20: '5',
        0x21: '6',
        0x22: '7',
        0x23: '8',
        0x24: '9',
    };

    extract(): this {
        let currentByte = 0;
        console.log('a');
        for (let i = 0; i < 5; i++) {
            this.output.default.push({
                rank: i + 1,
                score: parseInt(this.hi!.slice(currentByte, 6).toString(this.scoreCharset)) * 10,
                name: this.hi!.slice(currentByte + 6, 3).toString(this.charset, 64)
            });
            currentByte += 16;
        }
        return this;
    }
}
