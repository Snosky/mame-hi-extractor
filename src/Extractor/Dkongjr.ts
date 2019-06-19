import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'dkongjr'
})
export default class Dkongjr extends AbstractExtractor {
    protected charset = {
        0x10: ' ',
        0x2B: '.',
        0x2C: '-'
    };

    extract(): any {
        let currentByte = 0;
        for (let i = 0; i< 5; i++) {
            currentByte += i ? 7 : 2; // Skip debug values
            this.scores.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 6).decodeBCD(),
                name: this.hi!.slice(currentByte + 12, 3).toString(this.charset, 48)
            });
            currentByte += 27;
        }

    }
}
