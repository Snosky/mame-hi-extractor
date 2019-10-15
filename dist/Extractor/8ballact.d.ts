import AbstractExtractor from "../AbstractExtractor";
export default class Extractor8ballact extends AbstractExtractor {
    protected charset: {
        0x00: string;
    };
    protected scoreCharset: {
        0x00: string;
        0x1B: string;
        0x1C: string;
        0x1D: string;
        0x1E: string;
        0x1F: string;
        0x20: string;
        0x21: string;
        0x22: string;
        0x23: string;
        0x24: string;
    };
    extract(): this;
}
