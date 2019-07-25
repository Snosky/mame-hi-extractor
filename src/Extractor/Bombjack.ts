import AbstractExtractor from '../AbstractExtractor';
import Extractor from '../Decorator/Extractor';

@Extractor({
    name: 'bombjack',
    hi: true
})
export default class Bombjack extends AbstractExtractor {
    protected charset = {
        0x00: ' ',
        0x2E: '.',
    };

    extract(): any {
        let currentByte = 16;
        for (let i = 0; i < 10; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: parseInt(this.hi!.buffer.readIntLE(currentByte, 4).toString(16)),
                name: ''
            });
            currentByte += 4;
        }
        // TODO : Extras - Stage
        currentByte += 10;
        for (let i = 0; i < 10; i++) {
            currentByte += 2; // Skip RANK
            this.scores.default[i].name = this.hi!.slice(currentByte, 6).byteSkip(true).toString(this.charset);
            currentByte += 8;
        }
    }
}
