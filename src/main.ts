import extractors from './Extractors';

export default class MameHiExtractor {
    protected dir!: string;

    constructor(dir: string) {
        this.dir = dir;
    }

    public get(romName: string) {
        if (extractors[romName]) {
            return extractors[romName].init(this.dir).scores;
        }
    }
}
