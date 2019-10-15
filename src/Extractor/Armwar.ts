import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";
import {ScoreExtra} from "../interfaces";

@Extractor({
    name: 'armwar',
    data: {
        characters: {
            0x00: 'RASH',
            0x04: 'JUSTICE',
            0x08: 'GRAY',
            0x12: 'SIREN',
        }
    }
})
export default class Armwar extends AbstractExtractor {
    protected charset = {
        0x34: '0',
        0x36: '1',
        0x38: '2',
        0x3A: '3',
        0x3C: '4',
        0x3E: '5',
        0x40: '6',
        0x42: '7',
        0x44: '8',
        0x46: '9',
        0x48: '.',
        0x4A: ':',
        0x4C: '!',
        0x4E: '?',
        0x50: '&',
        0x52: ' ',
    };

    extract(withExtra: boolean) {
        let currentByte = 0;
        for (let i = 0; i < 50; i++) {
            const index = this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 4).toHexNumber(),
                name: this.hi!.slice(currentByte + 4, 5).toString(this.charset, 65, 2)
            });

            if (withExtra) {
                this.output.default[index - 1].extra = {
                    character: this.hi!.slice(currentByte + 9, 1).readIntBE()
                } as ScoreExtra;
            }
            currentByte += 12;
        }
        return this;
    }
}
