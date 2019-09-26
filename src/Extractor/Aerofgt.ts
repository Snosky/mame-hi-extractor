import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'aerofgt'
})
export default class Aerofgt extends AbstractExtractor {
    protected charset = {
        0x00: '',
        0x25: '.',
        0x26: '-',
    };

    extract(): any {
        let currentByte = 0;
        for (let i = 0; i < 10; i++) {
            this.output.default.push({
                rank: i + 1,
                name: this.hi!.slice(currentByte, 3).toString(this.charset, 54),
                score: this.hi!.slice(currentByte + 4, 3).readIntBE() * 100
            });
            currentByte += 16;
        }
    }
}
