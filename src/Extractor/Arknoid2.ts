import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'arknoid2'
})
export default class Arknoid2 extends AbstractExtractor {

    extract(): any {
        let currentByte = 0;
        for (let i = 0; i < 5; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 3).toHexNumber() * 10,
                round: this.hi!.slice(currentByte + 3, 1).readIntBE().toString(),
                name: this.hi!.slice(currentByte + 4, 3).toString()
            });
            currentByte += 8;
        }
    }
}
