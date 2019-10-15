import AbstractExtractor from "../AbstractExtractor";
export default class Ajax extends AbstractExtractor {
    protected charset: {
        0x2B: string;
        0x2C: string;
    };
    extract(): this;
}
