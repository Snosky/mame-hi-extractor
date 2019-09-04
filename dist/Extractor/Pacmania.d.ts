import AbstractExtractor from "../AbstractExtractor";
export default class Pacmania extends AbstractExtractor {
    protected charset: {
        0x20: string;
        0x21: string;
        0x26: string;
        0x27: string;
        0x2C: string;
        0x2E: string;
    };
    extract(): any;
}
