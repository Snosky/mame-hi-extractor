import AbstractExtractor from "../AbstractExtractor";
export default class Appoooh extends AbstractExtractor {
    protected charset: {
        0x00: string;
        0x3F: string;
        0x40: string;
    };
    extract(): this;
}
