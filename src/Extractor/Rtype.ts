import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

// TODO : Not tested
@Extractor({
    name: 'rtype'
})
export default class Rtype extends AbstractExtractor {
    extract(): any {
        let currentByte = 4;
        for (let i = 0; i < 10; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: parseInt(this.hi!.slice(currentByte, 3).byteSwap(2).readIntBE().toString(16)), // TODO : byteSwap will not work with an odd number of bytes
                name: this.hi!.slice(currentByte + 3, 7).buffer.toString() // TODO : Charset
            });
            currentByte += 11;
        }
    }
}
