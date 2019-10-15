import AbstractExtractor from "../AbstractExtractor";
export default class Invaddlx extends AbstractExtractor {
    protected charset: {
        0x1A: string;
        0x1B: string;
    };
    extract(): this;
}
