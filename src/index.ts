import AbstractExtractor from "./AbstractExtractor";
import { accessSync } from 'fs'
import { resolve } from 'path'


export class MameHiExtractor {
    constructor(private dir: string) {}

    /**
     * Return hiscores of a game
     * @param romName
     */
    public async get(romName: string): Promise<AbstractExtractor | undefined | void> {
        const extractorImport = await import(this.extractorPath(romName))
        return (new extractorImport.default()).init(this.dir)
    }

    /**
     * Check if hiscore extractor for a game exist
     * @param romName
     */
    public exist(romName: string) {
        try {
            return accessSync(this.extractorPath(romName))
        } catch (e) {
            return false
        }
    }

    protected extractorPath(romName: string): string {
        return resolve(__dirname, 'Extractor', romName.toLowerCase() + '.ts')
    }
}
