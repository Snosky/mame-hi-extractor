import AbstractExtractor from "../AbstractExtractor";
export default class Jack extends AbstractExtractor {
    protected charset: {
        0x40: string;
        0x5B: string;
    };
    extract(): any;
}
