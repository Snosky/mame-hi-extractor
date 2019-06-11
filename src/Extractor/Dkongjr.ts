import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'dkongjr'
})
export default class Dkongjr extends AbstractExtractor {
    extract(): any {
        let currentByte = 0;
        for (let i = 0; i< 5; i++) {
            currentByte += i ? 7 : 2; // Skip debug values
            this.scores.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 6).decodeBCD(),
                name: this.asciiOffset(this.hi!.slice(currentByte + 12, 3).buffer.toString(), 48) // TODO : Charset
            });
            currentByte += 27;
        }

    }
}
