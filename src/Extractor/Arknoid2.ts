import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'arknoid2'
})
export default class Arknoid2 extends AbstractExtractor {

    extract(withExtra: boolean): any {
        let currentByte = 0;
        for (let i = 0; i < 5; i++) {
            const index = this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 3).toHexNumber() * 10,
                name: this.hi!.slice(currentByte + 4, 3).toString()
            });
            if (withExtra) {
                this.output.default[index - 1].extra = {
                    round: this.hi!.slice(currentByte + 3, 1).readIntBE().toString(),
                }
            }
            currentByte += 8;
        }
    }
}
