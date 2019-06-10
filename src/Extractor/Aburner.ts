import AbstractExtractor from '../AbstractExtractor';
import {join} from "path";

/**
 * FIXME : Not Tested
 */
export default class Aburner extends AbstractExtractor {
    constructor(filePath: string, fileName = 'aburner.hi') {
        super(join(filePath, fileName));
    }

    extract(): any {
         let currentByte = 0;
         for (let i = 0; i < 20; i++) {
             this.scores.default.push({
                 rank: i + 1,
                 score: parseInt(this.buffer.buffer.readIntBE(currentByte, 4).toString(16)),
                 name: this.buffer.slice(currentByte + 4, 4).buffer.toString(),
                 // TODO : Extras, HIT, MEDALS
             });
             currentByte += 14;
         }
    }
}
