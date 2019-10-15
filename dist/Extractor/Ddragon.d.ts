import AbstractExtractor from "../AbstractExtractor";
export default class Ddragon extends AbstractExtractor {
    protected charset: {
        0x3B: string;
        0x3C: string;
    };
    extract(): this;
}
