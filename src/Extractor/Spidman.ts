import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";
import {Score} from "../interfaces";

@Extractor({
    name: 'spidman',
    data: {
        characters: {
            0x00: 'BlackCat',
            0x01: 'Spidey',
            0x02: 'HawkEye',
            0x03: 'Namor',
        }
    }
})
export default class Spidman extends AbstractExtractor {
    protected charset = {
        0x00: ' '
    };

    extract(withExtra = false): this {
        let currentByte = 0;

        if (withExtra) {
            this.output.extras = {};
        }
        let globalRank = 1;
        for (let characterId = 0; characterId < 4; characterId++) {
            if (withExtra) {
                this.output.extras![this.characters![characterId]] = [];
            }
            for (let i = 0; i < 4; i++) { // All extras hiscores are by group of 4
                let score = {
                    rank: i + 1,
                    score: this.hi!.slice(currentByte,3).readIntLE(),
                    name: this.hi!.slice(currentByte + 4, 3).toString(this.charset),
                } as Score;

                if (withExtra) {
                    score.extra = { character: characterId };
                    this.output.extras![this.characters![characterId]].push(Object.assign({}, score));
                }
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
        return this;
    }
}
