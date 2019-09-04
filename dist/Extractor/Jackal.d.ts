import AbstractExtractor from "../AbstractExtractor";
export default class Jackal extends AbstractExtractor {
    protected charset: {
        0x0C: string;
        0x0D: string;
        0x0E: string;
        0x0F: string;
        0x10: string;
    };
    extract(): any;
}
