import AbstractExtractor from "../AbstractExtractor";
export default class Nemesis extends AbstractExtractor {
    protected charset: {
        0x00: string;
        0x1B: string;
        0x1C: string;
    };
    extract(withExtra?: boolean): this;
}
