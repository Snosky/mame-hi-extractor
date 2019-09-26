import AbstractExtractor from "../AbstractExtractor";
export default class Alexkidd extends AbstractExtractor {
    protected charset: {
        0x00: string;
        0x3E: string;
        0x5B: string;
        0x5E: string;
        0x5F: string;
    };
    extract(): any;
}
