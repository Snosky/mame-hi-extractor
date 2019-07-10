import extractors from './Extractors';
import {Output} from "./interfaces";

export default class MameHiExtractor {
    protected dir!: string;

    constructor(dir: string) {
        this.dir = dir;
    }

    /**
     * Return hiscores of a game
     * @param romName
     */
    public get(romName: string): Output|undefined {
        if (extractors[romName]) {
            return extractors[romName].init(this.dir).scores;
        }
    }

    /**
     * Check if hiscore extractor for a game exist
     * @param romName
     */
    public exist(romName: string) {
        return !!extractors[romName];
    }
}
