import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

// TODO : Not tested
@Extractor({
    name: 'rtype'
})
export default class Rtype extends AbstractExtractor {
    protected charset = {
        0x20: ' ',
        0x21: '!',
        0x2C: ',',
        0x2E: '.',
        0x3E: '&gt;',
        0x3F: '?',
    };

    extract(): any {
        let currentByte = 4;
        for (let i = 0; i < 10; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: parseInt(this.hi!.slice(currentByte, 3).byteSwap(2).readIntBE().toString(16)), // TODO : byteSwap will not work with an odd number of bytes
                name: this.hi!.slice(currentByte + 3, 7).buffer.toString(this.charset)
            });
            currentByte += 11;
        }
    }
}
