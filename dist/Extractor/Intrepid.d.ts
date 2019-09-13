import AbstractExtractor from "../AbstractExtractor";
export default class Intrepid extends AbstractExtractor {
    protected charset: {
        0xFD: string;
        0x24: string;
        0x01: string;
        0x02: string;
        0x03: string;
        0x04: string;
        0x05: string;
        0x06: string;
        0x07: string;
        0x08: string;
        0x09: string;
    };
    extract(): any;
}
