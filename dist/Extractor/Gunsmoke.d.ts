import AbstractExtractor from "../AbstractExtractor";
export default class Gunsmoke extends AbstractExtractor {
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
        0x24: string;
        0x2E: string;
        0x2F: string;
        0x34: string;
        0x35: string;
        0x3E: string;
        0x40: string;
        0x41: string;
        0x43: string;
        0x45: string;
        0x48: string;
        0x49: string;
        0x4a: string;
        0x4e: string;
        0x5b: string;
        0x60: string;
        0x61: string;
        0x62: string;
        0x63: string;
        0x64: string;
        0x65: string;
        0x68: string;
    };
    extract(): any;
}
