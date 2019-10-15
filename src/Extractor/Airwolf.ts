import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'airwolf'
})
export default class Airwolf extends AbstractExtractor {
    protected charset = {
        0x40: ' ',
        0x5B: '.',
        0x5C: ',',
        0x5D: '¦',
        0x5E: '‾',
    };

    extract(): any {
        let currentByte = 0;
        for (let i = 0; i < 5; i++) {
            const score = this.hi!.slice(currentByte, 7).decodeBCD();
            const sub = parseInt(new Array(score.toString().length).fill(1).join(''));
            this.output.default.push({
                rank: i + 1,
                score: score - sub,
                name: this.hi!.slice(currentByte + 8, 10).toString(this.charset)
            });
            currentByte += 19;
        }
        return this;
    }
}
