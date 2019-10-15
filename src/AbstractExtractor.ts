import {readFileSync} from "fs";
import MHEBuffer from "./MHEBuffer";
import {join} from 'path';
import {ExtractorOptionsData, ExtractorOptionsDataCharacters, Output} from "./interfaces";

export default abstract class AbstractExtractor {
    private gameName = '';
    private hasHi = false;
    private nvramName = '';

    protected hi?: MHEBuffer;
    protected nvram?: MHEBuffer;
    protected data?: ExtractorOptionsData;

    protected output: Output = {default: []};

    public init(filePath: string) {
        if (this.hasHi) {
            this.hi = new MHEBuffer(readFileSync(join(filePath, 'hi', this.gameName + '.hi')));
        }
        if (this.nvramName) {
            this.nvram = new MHEBuffer(readFileSync(join(filePath, 'nvram', this.gameName, this.nvramName)))
        }
        return this;
    }

    abstract extract(withExtra?: boolean): this;

    public get scores(): Output {
        return this.output;
    }

    public get name(): string {
        return this.gameName;
    }

    public get characters(): ExtractorOptionsDataCharacters|null {
        if (this.data && this.data.characters) {
            return this.data.characters;
        }
        return null;
    }
}
