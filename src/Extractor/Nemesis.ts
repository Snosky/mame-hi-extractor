import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'nemesis'
})
export default class Nemesis extends AbstractExtractor {
protected charset = {
        0x1C: '.'
    };
protected player = {
        0x00: 'Male',
        0x01: 'Female'
    };
protected zodiac = {
        0x0A: 'Aquarius',
        0x00: 'Aries',
        0x03: 'Cancer',
        0x05: 'Virgo',
        0x07: 'Scorpio',
        0x06: 'Libra',
        // 0x??: 'Capricorn',
        // 0x??: 'Pices',
        // 0x??: 'Taurus',
        // 0x??: 'Sagittarius',
        // 0x??: 'Gemini'
    };
    extract(): any {
        let scoreCurrentByte = 1;
        let nameCurrentByte = 3;
        for (let i = 0; i < 10; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(scoreCurrentByte +10, 4).toHexNumber(),
//                player: this.hi!.slice(nameCurrentByte, 1).toString(this.player),
//                extra: this.hi!.slice(nameCurrentByte + 1, 1).toString(this.zodiac),
                name: this.hi!.slice(nameCurrentByte, 3).toString(this.charset,64)
            });
            scoreCurrentByte += 14;
            nameCurrentByte += 14;
        }
    }
}
