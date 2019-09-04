import AbstractExtractor from "../AbstractExtractor";
export default class Wboy extends AbstractExtractor {
    protected charset: {
        0x5C: string;
        0x5E: string;
        0x7D: string;
        0x7E: string;
        0x7F: string;
    };
    extract(): any;
}
