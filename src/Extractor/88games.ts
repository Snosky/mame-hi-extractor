import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: '88games',
    hi: false,
    nvram: 'nvram'
})
export default class Extractor88Games extends AbstractExtractor {
    protected extraCharset = {
        0x0d: '.'
    };

    protected defaultCharset = {
        0x0E: '.'
    };

    extract(): this {

        let extraIds = [
            'run',
            'longJump',
            'hurdles',
            'highJump',
            'archery',
            'shoot',
            'javelin',
            'relay',
        ];

        let currentByte = 880;
        this.scores.extras = {test: []};

        for (const extra of extraIds) {
            this.scores.extras[extra] = [];

            for (let i = 0; i < 3; i++) {
                this.scores.extras[extra].push({
                    rank: i + 1,
                    name: this.nvram!.slice(currentByte, 3).toString(this.extraCharset, 48),
                    score: this.formatScore(this.nvram!.slice(currentByte + 72, 3).toHexNumber(), extra),
                    scoreSuffix: this.getScoreSuffix(extra)
                });
                currentByte += 3;
            }

        }
        currentByte+=72; // Jump extras scores

        for (let i = 0; i < 100; i++) {
            this.scores.default.push({
                rank: i + 1,
                name: this.nvram!.slice(currentByte, 3).toString(this.defaultCharset, 48),
                score: this.nvram!.slice(currentByte + 3, 3).toHexNumber() * 10,
            });
            currentByte += 6;
        }
        return this;
    }

    protected formatScore(score: number, extra: string) {
        if (['run', 'longJump', 'hurdles', 'highJump', 'relay'].indexOf(extra) >= 0) {
            return score / 10000;
        } else if (extra === 'javelin') {
            return score / 100
        }
        return score / 10;
    }

    protected getScoreSuffix(extra: string) {
        if (['run', 'hurdles', 'relay'].indexOf(extra) >= 0) {
            return 's'
        } else if (['longJump', 'highJump', 'javelin'].indexOf(extra) >= 0) {
            return 'm'
        }
        return '';
    }
}
