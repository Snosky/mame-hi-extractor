import AbstractExtractor from "../AbstractExtractor";
import Extractor from '../Decorator/Extractor';

@Extractor({
    name: 'trackfld',
    hi: false,
    nvram: 'nvram'
})
export default class Trackfld extends AbstractExtractor {
    extract(): any {
        let currentByte = 1024; // Jump first 1024 Bytes

        let extraIds = [
            'run',
            'longJump',
            'javelin',
            'hurdles',
            'hammer',
            'highJump'
        ];

        this.output.extras = {};
        for (const extra of extraIds) {
            this.output.extras[extra] = [];
            for (let i = 0; i < 4; i++) { // All extras hiscores are by group of 4
                this.output.extras[extra].push({
                    rank: i + 1,
                    score: this.nvram!.slice(currentByte,4).decodeBCD() / 100,
                    name: this.nvram!.slice(currentByte + 4, 3).toString({}, 48),
                    scoreSuffix: ['run', 'hurdles'].indexOf(extra) >= 0 ? 'sec' : 'm'
                });
                currentByte += 8;
            }
        }

        for (let i = 0; i < 160; i++) { // Next 160 groups of 5 bytes are default scores
            this.output.default.push({
                rank: i + 1,
                score: Number.parseInt(this.nvram!.buffer.readIntBE(currentByte, 3).toString(16)) * 10,
                name: this.nvram!.slice(currentByte + 3, 2).decodeBase32()
            });
            currentByte += 5;
        }
    }
}
