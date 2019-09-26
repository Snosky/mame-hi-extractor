import AbstractExtractor from "../AbstractExtractor";
export default class Alien3 extends AbstractExtractor {
    protected charset: {
        0x22: string;
        0x27: string;
        0x5B: string;
        0x5C: string;
        0x5D: string;
        0x5E: string;
    };
    extract(): any;
}
