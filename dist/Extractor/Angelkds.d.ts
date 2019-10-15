import AbstractExtractor from "../AbstractExtractor";
export default class Angelkds extends AbstractExtractor {
    protected charset: {
        0x00: string;
        0x3A: string;
        0x3B: string;
        0x3C: string;
    };
    extract(): this;
}
