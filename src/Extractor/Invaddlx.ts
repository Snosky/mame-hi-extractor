import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'invaddlx'
})
export default class Invaddlx extends AbstractExtractor {
    extract(): any {
        this.scores.default.push({
            rank: 1,
            score: parseInt(this.hi!.slice(0, 2).readIntLE().toString(16)) * 10,
            name: this.asciiOffset(this.hi!.slice(2, 10).buffer.toString(), 65), // TODO : Charset
        });
    }
}
