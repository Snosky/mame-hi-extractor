import AbstractExtractor from "../AbstractExtractor";
export default class Xevious extends AbstractExtractor {
    protected charset: {
        0x24: string;
        0x36: string;
        0x37: string;
        0x38: string;
        0x39: string;
        0x3A: string;
        0x3B: string;
        0x3C: string;
        0x3D: string;
        0x3E: string;
        0x3F: string;
        0x40: string;
        0x41: string;
        0x42: string;
        0x43: string;
        0x44: string;
        0x45: string;
        0x46: string;
        0x47: string;
        0x48: string;
        0x49: string;
        0x4A: string;
        0x4B: string;
        0x4C: string;
        0x4D: string;
        0x4E: string;
        0x4F: string;
        0x50: string;
    };
    extract(): any;
}
