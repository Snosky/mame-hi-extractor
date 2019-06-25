import AbstractExtractor from "../AbstractExtractor";
export default class Joust extends AbstractExtractor {
    protected charset: {
        0x0A: string;
        0x32: string;
    };
    extract(): any;
}
