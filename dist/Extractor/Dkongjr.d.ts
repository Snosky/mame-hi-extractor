import AbstractExtractor from "../AbstractExtractor";
export default class Dkongjr extends AbstractExtractor {
    protected charset: {
        0x10: string;
        0x2B: string;
        0x2C: string;
    };
    extract(): any;
}
