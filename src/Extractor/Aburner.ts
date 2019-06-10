import AbstractExtractor from '../AbstractExtractor';
import {join} from "path";
import Extractor from '../Decorator/Extractor';

/**
 * FIXME : Not Tested
 */
@Extractor({
    name: 'aburner',
    hi: true
})
export default class Aburner extends AbstractExtractor {
    extract(): any {
         let currentByte = 0;
         for (let i = 0; i < 20; i++) {
             this.scores.default.push({
                 rank: i + 1,
                 score: parseInt(this.hi!.buffer.readIntBE(currentByte, 4).toString(16)),
                 name: this.hi!.slice(currentByte + 4, 4).buffer.toString(),
                 // TODO : Extras, HIT, MEDALS
             });
             currentByte += 14;
         }
    }
}
