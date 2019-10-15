import AbstractExtractor from "../AbstractExtractor";
export default class Dorunrun extends AbstractExtractor {
    protected charset: {
        0x24: string;
        0x25: string;
        0x5B: string;
    };
    extract(): this;
}
