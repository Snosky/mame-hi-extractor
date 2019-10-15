import AbstractExtractor from "../AbstractExtractor";
import Extractor from '../Decorator/Extractor';

@Extractor({
    name: 'marble',
    hi: true,
})
export default class Marble extends AbstractExtractor {
    extract(): any {
        let rank = 1;
        for (let i = 0; i < this.hi!.buffer.length; i += 5) {
            this.output.default.push({
                rank: rank++,
                score: this.hi!.buffer.readIntBE(i, 3),
                name: this.hi!.slice(i + 3, 2).decodeBase40()
            });
        }
        return this;
    }
}
