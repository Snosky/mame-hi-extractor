import AbstractExtractor from "./AbstractExtractor";
export default class MameHiExtractor {
    protected dir: string;
    constructor(dir: string);
    /**
     * Return hiscores of a game
     * @param romName
     */
    get(romName: string): AbstractExtractor | undefined;
    /**
     * Check if hiscore extractor for a game exist
     * @param romName
     */
    exist(romName: string): boolean;
}
