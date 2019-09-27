import AbstractExtractor from "../AbstractExtractor";
export default class Arkarea extends AbstractExtractor {
    protected charset: {
        0x00: string;
        0x26: string;
        0x27: string;
    };
    extract(): any;
}
