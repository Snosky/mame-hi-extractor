import AbstractExtractor from "../AbstractExtractor";
export default class Mappy extends AbstractExtractor {
    protected charset: {
        0x5F: string;
    };
    extract(): this;
}
