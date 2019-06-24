import extractors from './Extractors';

export default class MameHiExtractor {
    protected dir = '/home/tpayen/.mame';

    public get(romName: string) {
        if (extractors[romName]) {
            console.log(extractors[romName].init(this.dir).scores);
        }
    }
}
