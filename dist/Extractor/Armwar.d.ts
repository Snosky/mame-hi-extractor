import AbstractExtractor from "../AbstractExtractor";
export default class Armwar extends AbstractExtractor {
    protected charset: {
        0x34: string;
        0x36: string;
        0x38: string;
        0x3A: string;
        0x3C: string;
        0x3E: string;
        0x40: string;
        0x42: string;
        0x44: string;
        0x46: string;
        0x48: string;
        0x4A: string;
        0x4C: string;
        0x4E: string;
        0x50: string;
        0x52: string;
    };
    extract(withExtra: boolean): this;
}
