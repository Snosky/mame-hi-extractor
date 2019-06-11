import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'digdug',
    hi: false,
    nvram: 'earom'
})
export default class Digdug extends AbstractExtractor {
    /**
     * Score are from last to first, reverse loop
     */
    extract(): any {
        for (let i = 5; i > 0; i--) {
            let nameByte = 16 + (i - 1)  * 3;
            this.scores.default.push({
                rank: i,
                score: parseInt(this.nvram!.buffer.readIntBE((i - 1) * 3, 3).toString(16)),
                name: this.asciiOffset(this.nvram!.slice(nameByte, 3).buffer.toString(), 39) // TODO : Charset
            })
        }
    }
}
