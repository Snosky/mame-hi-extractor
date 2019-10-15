import AbstractExtractor from "../AbstractExtractor";
export default class Simpsons extends AbstractExtractor {
    protected charset: {
        0x40: string;
        0x5B: string;
        0x5C: string;
        0x5D: string;
        0x5E: string;
        0x5F: string;
        0x60: string;
        0x61: string;
        0x62: string;
    };
    extract(): this;
}
