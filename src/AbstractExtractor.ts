import {readFileSync} from "fs";
import MHEBuffer from "./MHEBuffer";

export default abstract class AbstractExtractor {

    protected buffer!: MHEBuffer;
    protected output: Output = {default: []};

    public constructor(file: string) {
        this.buffer = new MHEBuffer(readFileSync(file));
        this.extract();
    }

    abstract extract(): any;

    public get scores(): Output {
        return this.output;
    }

    /**
     * ASCII Offset
     * @param str
     * @param offset
     */
    protected asciiOffset(str: string, offset: number) {
        let result = '';
        for (let char of str) {
            result += String.fromCharCode(char.charCodeAt(0) + offset);
        }
        return result;
    }
}
