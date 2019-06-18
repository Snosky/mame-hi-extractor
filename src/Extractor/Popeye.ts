import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'popeye'
})
export default class Popeye extends AbstractExtractor {
    extract(): any {
        let currentByte = 1;
        let positions: number[] = [];

        for (let i = 0; i < 5; i++) {
            positions.push((this.hi!.slice(currentByte, 1).buffer.readUInt8(0) - 11) / 6);
            currentByte += 1;
        }

        for (let i = 0; i < 5; i++) {
            this.scores.default.push({
                rank: positions[i] + 1,
                name: this.asciiOffset(this.hi!.slice(currentByte, 3).buffer.toString(), 55), // TODO : charset
                score: parseInt(this.hi!.slice(currentByte + 3, 3).readIntLE().toString(16))
            });
            currentByte += 6;
        }
    }
}
