import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'spidman'
})
export default class Spidman extends AbstractExtractor {
    protected charset = {
        0x00: ' '
    }

    extract(): any {

        let currentByte = 0;

        let extraIds = [
            'BlackCat',
            'Spidey',
            'HawkEye',
            'Namor'
        ];

        this.output.extras = {};
        let globalRank = 1;
        for (const extra of extraIds) {
            this.output.extras[extra] = [];
            for (let i = 0; i < 4; i++) { // All extras hiscores are by group of 4
                let score = {
                    rank: i + 1,
                    score: this.hi!.slice(currentByte,3).readIntLE(),
                    name: this.hi!.slice(currentByte + 4, 3).toString(this.charset)
                };
                // character = extra

                this.output.extras[extra].push(Object.assign({}, score));
                score.rank = globalRank;
                this.output.default.push(score);
                currentByte += 8;
                globalRank++;
            }
        }
        this.output.default.sort((scoreA, scoreB) => {
            if (scoreA.score > scoreB.score) {
                return -1;
            } else if (scoreA.score < scoreB.score) {
                return 1;
            }
            return 0;
        });
        this.output.default.map((score, index) => { score.rank = index + 1});
    }
}
