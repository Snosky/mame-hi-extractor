import AbstractExtractor from "../AbstractExtractor";
export default class Shinobi extends AbstractExtractor {
    protected charset: {
        0x22: string;
        0x23: string;
        0x25: string;
        0x26: string;
        0x27: string;
        0x28: string;
        0x29: string;
        0x2A: string;
        0x2B: string;
        0x2E: string;
    };
    extract(): this;
}
