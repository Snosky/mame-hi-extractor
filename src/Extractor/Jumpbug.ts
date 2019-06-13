import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";
import {log} from "util";
import MHEBuffer from "../MHEBuffer";

@Extractor({
    name: 'jumpbug'
})
export default class Jumpbug extends AbstractExtractor {
    extract(): any {
        // Get only names
        for (let i = 0; i < 3; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: 0,
                name: this.hi!.slice(12 + i * 3, 3).toStringLE(-63)
            });
        }
        console.log(new MHEBuffer(
            Buffer.from(this.hi!.slice(0, 6).readIntLE().toString(16), 'hex')
        ).nibbleSkip(true));

        let a = this.hi!.slice(6, 6).nibbleSkip(false);
        console.log(a.buffer);
        console.log(a.readIntLE().toString(16));
        for (let i = a.buffer.byteLength - 1; i >= 0; i--) {
            console.log(a.buffer.readIntLE(i, 1).toString(16));
        }

        this.scores.default[0].score = parseInt(this.hi!.slice(0, 6).nibbleSkip(false).buffer.readUIntLE(0, 3).toString(16))
    }
}
