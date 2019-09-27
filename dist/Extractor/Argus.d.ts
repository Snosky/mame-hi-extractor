import AbstractExtractor from "../AbstractExtractor";
export default class Argus extends AbstractExtractor {
    protected charset: {
        0x19: string;
        0x1B: string;
        0x1C: string;
        0x2E: string;
    };
    extract(): any;
}
