import AbstractExtractor from "../AbstractExtractor";
export default class Extractor4dwarrio extends AbstractExtractor {
    protected charset: {
        0x21: string;
        0x29: string;
        0x6E: string;
    };
    extract(): any;
}
