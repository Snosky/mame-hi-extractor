import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

//TODO : Not tested
@Extractor({
    name: 'xevious'
})
export default class Xevious extends AbstractExtractor {
    protected charset = {
        0x24: ' ',
        0x36: 'a',
        0x37: 'b',
        0x38: 'c',
        0x39: 'd',
        0x3A: 'e',
        0x3B: 'f',
        0x3C: 'g',
        0x3D: 'h',
        0x3E: 'i',
        0x3F: 'j',
        0x40: 'k',
        0x41: 'l',
        0x42: 'm',
        0x43: 'n',
        0x44: 'o',
        0x45: 'p',
        0x46: 'q',
        0x47: 'r',
        0x48: 's',
        0x49: 't',
        0x4A: 'u',
        0x4B: 'v',
        0x4C: 'w',
        0x4D: 'x',
        0x4E: 'y',
        0x4F: 'z',
        0x50: '.'
    };

    extract(): this {
        for (let i = 0; i < 5; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: parseInt(this.hi!.slice(i * 16, 3).readIntLE().toString(16)) * 10,
                name: this.hi!.slice(i * 16 + 3, 10).toString(this.charset, 55)
            })
        }
        return this;
    }
}
