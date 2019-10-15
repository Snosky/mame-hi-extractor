import AbstractExtractor from "../AbstractExtractor";
export default class Spf2t extends AbstractExtractor {
    protected charset: {
        0x1A: string;
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
        0x25: string;
        0x26: string;
        0x27: string;
        0x28: string;
        0x29: string;
        0x2A: string;
        0x2B: string;
        0x2C: string;
        0x2D: string;
    };
    extract(): this;
}
