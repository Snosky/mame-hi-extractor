import AbstractExtractor from "../AbstractExtractor";
export default class Toki extends AbstractExtractor {
    protected charset: {
        0x00: string;
        0x20: string;
        0x5B: string;
        0x5C: string;
        0x5D: string;
    };
    extract(): this;
}
