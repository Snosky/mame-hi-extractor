import AbstractExtractor from "../AbstractExtractor";
export default class Afighter extends AbstractExtractor {
    protected charset: {
        0x00: string;
        0x5C: string;
        0x5D: string;
    };
    extract(): any;
}
