import AbstractExtractor from '../AbstractExtractor';
import Extractor from '../Decorator/Extractor';

@Extractor({
    name: 'galaga',
    hi: true
})
export default class Galaga extends AbstractExtractor {
    extract(): any {
        let currentByte = 0;
        for (let i = 0; i < 5; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 6).trim(0x24).decodeBCDLE(),
                name: ''
            });
            currentByte += 6;
        }
        for (let i = 0; i < 5; i++) {
            this.output.default[i].name = this.hi!.slice(currentByte, 3).toString({}, 55);
            currentByte += 3;
        }
    }
}
