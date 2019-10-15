import AbstractExtractor from "../AbstractExtractor";
export default class Kungfum extends AbstractExtractor {
    protected charset: {
        0x20: string;
        0x2E: string;
        0x5B: string;
    };
    extract(): this;
}
