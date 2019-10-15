import AbstractExtractor from "../AbstractExtractor";
export default class Aerofgt extends AbstractExtractor {
    protected charset: {
        0x00: string;
        0x25: string;
        0x26: string;
    };
    extract(): this;
}
