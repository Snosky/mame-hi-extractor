import AbstractExtractor from "../AbstractExtractor";
export default class Docastle extends AbstractExtractor {
    protected charset: {
        0x5B: string;
    };
    extract(): any;
}
