import AbstractExtractor from "../AbstractExtractor";
export default class Rtype extends AbstractExtractor {
    protected charset: {
        0x20: string;
        0x21: string;
        0x2C: string;
        0x2E: string;
        0x3E: string;
        0x3F: string;
    };
    extract(): any;
}
