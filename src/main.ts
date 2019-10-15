import extractors from './Extractors';
import {Output} from "./interfaces";
import AbstractExtractor from "./AbstractExtractor";

export default class MameHiExtractor {
    protected dir!: string;

    constructor(dir: string) {
        this.dir = dir;
    }

    /**
     * Return hiscores of a game
     * @param romName
     */
    public get(romName: string): AbstractExtractor|undefined {
        if (extractors[romName]) {
            return extractors[romName].init(this.dir);
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
