import AbstractExtractor from "../AbstractExtractor";
export default class Gng extends AbstractExtractor {
    protected charset: {
        0x1D: string;
    };
    extract(): this;
}
