import AbstractExtractor from "../AbstractExtractor";
export default class Aliensyn extends AbstractExtractor {
    protected charset: {
        0x00: string;
        0x5B: string;
        0x5C: string;
    };
    extract(): any;
}
