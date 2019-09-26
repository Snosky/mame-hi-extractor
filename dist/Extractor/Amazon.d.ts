import AbstractExtractor from "../AbstractExtractor";
export default class Amazon extends AbstractExtractor {
    protected charset: {
        0x00: string;
        0x01: string;
        0x0E: string;
        0x11: string;
        0x23: string;
    };
    extract(): any;
}
