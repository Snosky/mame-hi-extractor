import AbstractExtractor from '../AbstractExtractor';
import Extractor from '../Decorator/Extractor';

/*
    TODO : Charsets
 */
@Extractor({
    name: 'bosco',
    hi: true
})
export default class Bosco extends AbstractExtractor {
    extract(): any {
        let currentByte = 0;
        for (let i = 0; i < 5; i++) {
            this.scores.default.push({
                rank: i + 1,
                name: this.asciiOffset(this.hi!.slice(currentByte, 3).buffer.toString(), 55),
                score: 0,
            });
            currentByte += 3;
        }
        for (let i = 0; i < 5; i++) {
            this.scores.default[i].score = parseInt(this.hi!.buffer.readIntBE(currentByte, 4).toString(16));
            currentByte += 4;
        }
    }
}
