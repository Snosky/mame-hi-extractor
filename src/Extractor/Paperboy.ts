import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

// TODO : Not tested
@Extractor({
    name: 'paperboy',
    hi: false,
    nvram: 'eeprom'
})
export default class Paperboy extends AbstractExtractor {
    extract(): any {
        let currentByte = 66;
        for (let i = 0; i < 30; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: this.nvram!.slice(currentByte, 3).readIntBE(),
                name: this.nvram!.slice(currentByte + 3, 3).buffer.toString() // TODO : Charset
            });
            currentByte += 6;
        }
    }
}
