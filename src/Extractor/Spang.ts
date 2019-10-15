import Extractor from "../Decorator/Extractor";
import AbstractExtractor from "../AbstractExtractor";

@Extractor({
    name: 'spang'
})
export default class Spang extends AbstractExtractor {
    protected charset: { [key: number]: string } = {
        0x80: 'A',
        0x82: 'B',
        0x84: 'C',
        0x86: 'D',
        0x88: 'E',
        0x8A: 'F',
        0x8C: 'G',
        0x8E: 'H',
        0xA0: 'I',
        0xA2: 'J',
        0xA4: 'K',
        0xA6: 'L',
        0xA8: 'M',
        0xAA: 'N',
        0xAC: 'O',
        0xAE: 'P',
        0xC0: 'Q',
        0xC2: 'R',
        0xC4: 'S',
        0xC6: 'T',
        0xC8: 'U',
        0xCA: 'V',
        0xCC: 'W',
        0xCE: 'X',
        0xE0: 'Y',
        0xE2: 'Z'
    };

    extract(): any {
        let currentByte = 0;
        for (let i = 0; i < 5; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte + 1, 3).toHexNumber(),
                name: this.hi!.slice(currentByte + 5, 6).byteSkip(true).toString(this.charset)
            });
            currentByte += 16;
        }

        this.scores.extras = {panic: []};

        for (let i = 0; i < 5; i++) {
            this.scores.extras.panic.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte + 1, 3).toHexNumber(),
                name: this.hi!.slice(currentByte + 5, 6).byteSkip(true).toString(this.charset)
            });
            currentByte += 16;
        }
        return this;
    }
}
