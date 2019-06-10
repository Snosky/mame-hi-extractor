import AbstractExtractor from '../AbstractExtractor';
import {join} from 'path';
import Extractor from '../Decorator/Extractor';

@Extractor({
    name: '1941',
    hi: true
})
export default class Extractor1941 extends AbstractExtractor {
    extract(): any {
        let currentByte = 40;
        for (let i = 0; i < 10; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: parseInt(this.hi!.buffer.readIntBE(currentByte, 4).toString(16)),
                name: this.hi!.slice(currentByte + 4, 3).buffer.toString(),
                // TODO : Extras data like GRADE
            });
            currentByte += 8;
        }
    }
}
