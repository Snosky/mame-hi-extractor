import AbstractExtractor from "../AbstractExtractor";
export default class Dkong3 extends AbstractExtractor {
    protected charset: {
        0x40: string;
        0x5F: string;
        0x66: string;
    };
    extract(): this;
}
