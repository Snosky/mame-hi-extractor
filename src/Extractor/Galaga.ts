import AbstractExtractor from "../AbstractExtractor";
import {join} from "path";

export default class Galaga extends AbstractExtractor {

    constructor(filePath: string) {
        super(join(filePath, 'galaga.hi'));
    }

    extract(): any {
        let currentByte = 0;
        for (let i = 0; i < 5; i++) {
            console.log(this.buffer.slice(currentByte, currentByte + 6).buffer);
            // console.log(this.buffer.slice(currentByte, currentByte + 6).trim(0x24).decodeBCDLE());
            // this.output.default.push({
            //     rank: i + 1,
            //     score: this.buffer.slice(currentByte, currentByte + 6).trim(0x24).decodeBCDLE(),
            //     name: ''
            // });
            currentByte += 6;
        }

    }
}
