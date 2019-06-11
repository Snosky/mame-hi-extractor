import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'gng'
})
export default class Gng extends AbstractExtractor {
    extract(): any {
        let positions: number[] = [];

        for (let i = 0; i < 10; i++) {
            let buf = this.hi!.slice(i * 2, 2).byteSkip(false).buffer.readUInt8(0);
            positions.push((buf - 44) / 7)
        }

        let currentByte = 20;
        for (let i = 0; i < 10; i++) {
            this.scores.default.push({
                rank: positions[i] ? positions[i] : 10,
                score: parseInt(this.hi!.buffer.readIntBE(currentByte, 4).toString(16)),
                name: this.hi!.slice(currentByte + 4, 3).buffer.toString()
            });
            currentByte += 7;
        }
        this.scores.default.sort((a, b) => {
            if (a.rank < b.rank) {
                return -1;
            } else if (a.rank > b.rank) {
                return 1;
            }
            return 0;
        })
    }
}
