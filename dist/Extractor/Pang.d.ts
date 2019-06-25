import AbstractExtractor from "../AbstractExtractor";
export default class Pang extends AbstractExtractor {
    protected charset: {
        0x7B: string;
    };
    extract(): any;
}
