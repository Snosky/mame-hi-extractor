import AbstractExtractor from "../AbstractExtractor";
export default class Arkretrn extends AbstractExtractor {
    protected charset: {
        0x00: string;
        0x01: string;
        0x02: string;
        0x03: string;
        0x04: string;
        0x05: string;
        0x06: string;
        0x07: string;
        0x08: string;
        0x09: string;
        0x0A: string;
        0x25: string;
        0x26: string;
        0x27: string;
        0x28: string;
    };
    extract(): any;
}
