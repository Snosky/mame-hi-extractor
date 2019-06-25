import AbstractExtractor from "../AbstractExtractor";
export default class Popeye extends AbstractExtractor {
    protected charset: {
        0x24: string;
        0x25: string;
        0x26: string;
        0x27: string;
        0x28: string;
        0x29: string;
    };
    extract(): any;
}
