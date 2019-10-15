import AbstractExtractor from "../AbstractExtractor";
export default class Hsf2 extends AbstractExtractor {
    protected charset: {
        0x20: string;
        0x2E: string;
    };
    extract(): this;
}
