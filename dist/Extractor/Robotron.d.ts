import AbstractExtractor from "../AbstractExtractor";
export default class Robotron extends AbstractExtractor {
    protected charset: {
        0x3A: string;
    };
    extract(): this;
}
