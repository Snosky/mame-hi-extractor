import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'nemesis'
})
export default class Nemesis extends AbstractExtractor {
protected charset = {
        0x1C: '.'
    };
protected character = {
        0x00: 'MALE',
        0x01: 'FEMALE'
    };
protected special = {
        0x0A: 'Aquarius',
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
        0x11: 'Pices'
    };
    extract(): any {
        let scoreCurrentByte = 1;
        let nameCurrentByte = 3;
        for (let i = 0; i < 10; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(scoreCurrentByte +10, 4).toHexNumber(),
                character: this.hi!.slice(scoreCurrentByte, 1).toString(this.character),
                special: this.hi!.slice(scoreCurrentByte + 1, 1).toString(this.special),
                name: this.hi!.slice(nameCurrentByte, 3).toString(this.charset,64)
            });
            scoreCurrentByte += 14;
            nameCurrentByte += 14;
        }
    }
}