export default class MameHiExtractor {
    protected dir: string;
    constructor(dir: string);
    get(romName: string): Output | undefined;
}
