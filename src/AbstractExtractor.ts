import {readFileSync} from "fs";
import MHEBuffer from "./MHEBuffer";
import {join} from 'path';

export default abstract class AbstractExtractor {
    private gameName = '';
    private hasHi = false;
    private nvramName = '';

    protected hi?: MHEBuffer;
    protected nvram?: MHEBuffer;

    protected output: Output = {default: []};

    public init(filePath: string) {
        if (this.hasHi) {
            this.hi = new MHEBuffer(readFileSync(join(filePath, 'hi', this.gameName + '.hi')));
        }
        if (this.nvramName) {
            this.nvram = new MHEBuffer(readFileSync(join(filePath, 'nvram', this.gameName, this.nvramName)))
        }
        this.extract();
        return this;
    }

    abstract extract(): any;

    public get scores(): Output {
        return this.output;
    }
}
