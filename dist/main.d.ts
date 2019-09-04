import { Output } from "./interfaces";
export default class MameHiExtractor {
    protected dir: string;
    constructor(dir: string);
    /**
     * Return hiscores of a game
     * @param romName
     */
    get(romName: string): Output | undefined;
    /**
     * Check if hiscore extractor for a game exist
     * @param romName
     */
    exist(romName: string): boolean;
}
