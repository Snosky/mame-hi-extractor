import AbstractExtractor from "../AbstractExtractor";
export default class Pengo extends AbstractExtractor {
    protected charset: {
        0x5B: string;
    };
    extract(): this;
}
