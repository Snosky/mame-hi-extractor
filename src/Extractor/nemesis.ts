import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";
import {Score} from "../interfaces";

@Extractor({
    name: 'nemesis',
    data: {
        characters: {
            0x00: 'MALE',
            0x01: 'FEMALE'
        }/*,
        characterClass: {
            0x00: 'Aries',
            0x01: 'Taurus',
            0x02: 'Gemini',
            0x03: 'Cancer',
            0x04: 'Leo',
            0x05: 'Virgo',
            0x06: 'Libra',
            0x07: 'Scorpio',
            0x08: 'Sagittarius',
            0x09: 'Capricorn',
            0x0A: 'Aquarius',
            0x0B: 'Pices'
        }*/
    }
})
export default class Nemesis extends AbstractExtractor {
    protected charset = {
        0x00: ' ',
        0x1B: '-',
        0x1C: '.'
    };

    extract(withExtra = false): this {
        let scoreCurrentByte = 1;
        let nameCurrentByte = 3;
        for (let i = 0; i < 10; i++) {
            let score: Score = {
                rank: i + 1,
                score: this.hi!.slice(scoreCurrentByte + 10, 4).toHexNumber(),
                name: this.hi!.slice(nameCurrentByte, 3).toString(this.charset, 64)
            };

            if (withExtra) {
                score.extra = {
                    character: this.hi!.slice(scoreCurrentByte, 1).readIntBE()/*,
                    characterClass: this.hi!.slice(scoreCurrentByte + 1, 1).readIntBE(),*/
                }
            }


            this.output.default.push(score);
            scoreCurrentByte += 14;
            nameCurrentByte += 14;
        }
        return this;
    }
}