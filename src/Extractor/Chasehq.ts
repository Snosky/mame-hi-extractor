import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'chasehq'
})
export default class Chasehq extends AbstractExtractor {
    extract(): any {
        for (let i = 0; i < 10; i++) {
            let byte = i * 16 + 6; // Each line is 16 bytes, skip 6 first bytes because it's useless
            this.scores.default.push({
                rank: i + 1,
                score: parseInt(this.hi!.buffer.readIntBE(byte, 4).toString(16)),
                name: this.hi!.slice(byte + 6, 3).toString()
            });
        }
        return this;
    }
}
