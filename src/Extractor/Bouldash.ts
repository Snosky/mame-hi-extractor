import Extractor from "../Decorator/Extractor";
import AbstractExtractor from "../AbstractExtractor";

/*
    Bouldash do not sort by scores, it's juste a player list
 */
@Extractor({
    name: 'bouldash'
})
export default class Bouldash extends AbstractExtractor {
    extract(): any {
        let currentByte = 0;
        for (let i = 0; i < 7; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 3).toHexNumber() * 10,
                name: this.hi!.slice(currentByte + 5, 3).toString16()
            });
            currentByte += 10;
        }
    }
}
