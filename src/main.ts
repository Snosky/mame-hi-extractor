import extractors from './Extractors';
import {Output} from "./interfaces";

export default class MameHiExtractor {
    protected dir!: string;

    constructor(dir: string) {
        this.dir = dir;
    }

    public get(romName: string): Output|undefined {
        if (extractors[romName]) {
            return extractors[romName].init(this.dir).scores;
        }
    }

    public exist(romName: string) {
        return !!extractors[romName];
    }
}
