import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'tetrisp'
})
export default class Tetrisp extends AbstractExtractor {
    protected charset = {
        0x1B: '.',
        0x1C: '!',
        0x1D: '?',
    };

    extract(): any {
        let currentByte = 0;
        for (let i = 0; i < 5; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 4).readIntLE(),
                name: this.hi!.slice(currentByte + 12, 9).byteFilter(0x00).toString(this.charset, 64),
            });
            // console.log('Line ' + i, this.hi!.slice(currentByte + 4, 1).readIntBE());
            // console.log('Level ' + i, this.hi!.slice(currentByte + 8, 1).readIntBE());
            currentByte += 32;
        }

        this.output.extras = {'puzzle': []};
        for (let i = 0; i < 5; i++) {
            this.output.extras['puzzle'].push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 4).readIntLE(),
                name: this.hi!.slice(currentByte + 12, 9).byteFilter(0x00).toString(this.charset, 64)
            });
            // console.log('Stage ' + i, this.hi!.slice(currentByte + 4, 1).readIntBE());
            // console.log('Diff ' + i, this.hi!.slice(currentByte + 8, 1).readIntBE());
            // Diff => 0 easy, 1 standard
            currentByte += 32;
        }
    }
}
