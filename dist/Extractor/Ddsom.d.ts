import AbstractExtractor from "../AbstractExtractor";
export default class Ddsom extends AbstractExtractor {
    protected charset: {
        0x6C: string;
        0x6D: string;
        0x6E: string;
        0x6F: string;
        0x72: string;
        0x73: string;
        0x74: string;
        0x77: string;
        0x78: string;
        0x79: string;
        0x7A: string;
        0x7B: string;
        0x7C: string;
        0x7D: string;
        0x7E: string;
        0x7F: string;
        0x80: string;
        0x81: string;
        0xFF: string;
    };
    extract(): this;
}
