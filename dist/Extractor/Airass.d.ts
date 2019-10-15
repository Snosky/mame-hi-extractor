import AbstractExtractor from "../AbstractExtractor";
export default class Airass extends AbstractExtractor {
    protected charset: {
        0x5B: string;
        0x5C: string;
        0x5D: string;
        0x5E: string;
        0x61: string;
        0x62: string;
        0x63: string;
        0x64: string;
        0x65: string;
    };
    extract(): this;
}
