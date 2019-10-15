import AbstractExtractor from '../AbstractExtractor';
import Extractor from '../Decorator/Extractor';

@Extractor({
    name: 'asteroid',
    hi: true
})
export default class Asteroid extends AbstractExtractor {
    extract(): any {
        let currentBytes = 0;
        for (let i = 0; i < 10; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: parseInt(this.hi!.buffer.readIntLE(currentBytes, 2).toString(16)) * 10,
                name: '',
            });
            currentBytes += 2;
        }
        currentBytes += 3; //Separator
        for (let i = 0; i < 10; i++) {
            this.scores.default[i].name = this.hi!.slice(currentBytes, 3).toString({}, 54);
            currentBytes += 3;
        }
        return this;
    }
}
