import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'spidman'
})
export default class Spidman extends AbstractExtractor {
    extract(): any {

        let currentByte = 0;

        let extraIds = [
            'BlackCat',
            'Spidey',
            'HawkEye',
            'Namor'
        ];

        this.output.extras = {};
        for (const extra of extraIds) {
            this.output.extras[extra] = [];
            for (let i = 0; i < 4; i++) { // All extras hiscores are by group of 4
                this.output.extras[extra].push({
                    rank: i + 1,
                    score: this.hi!.slice(currentByte,3).readIntLE(),
                    name: this.hi!.slice(currentByte + 4, 3).toString()
                });
                currentByte += 8;
            }
        }

        currentByte = 0;

        for (let i = 0; i < 16; i++) {
            this.output.default.push({
                rank: i + 1,
                score: this.hi!.slice(currentByte, 3).readIntLE(),
                name: this.hi!.slice(currentByte + 4, 3).toString()
            });
            currentByte += 8;
        }
    }
}