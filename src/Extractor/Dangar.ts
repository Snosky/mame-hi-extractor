import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'dangar'
})
export default class Dangar extends AbstractExtractor {]

    /**
     * Scores are reversed, latest to first, so we doing the loop in reverse
     */
    extract(): any {
        let currentByte = 130;
        for (let i = 10; i > 0; i--) {
            this.scores.default.push({
                rank: Math.abs(i - 11),
                score: parseInt(this.hi!.buffer.readIntBE(currentByte - 13, 3).toString(16)) * 100,
                name: this.hi!.slice(currentByte - 10, 3).buffer.toString(), // TODO : charset
            });
            currentByte -= 13;
        }
    }
}
