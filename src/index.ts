import AbstractExtractor from "./AbstractExtractor";
import extractors from "./Extractor";


export class MameHiExtractor {
    constructor(private dir: string) {}

    /**
     * Return hiscores of a game
     * @param romName
     */
    public async get(romName: string): Promise<AbstractExtractor | undefined | void> {
        return (new extractors[romName]()).init(this.dir)
    }

    /**
     * Check if hiscore extractor for a game exist
     * @param romName
     */
    public exist(romName: string): boolean {
        return extractors[romName] !== undefined
    }
}
