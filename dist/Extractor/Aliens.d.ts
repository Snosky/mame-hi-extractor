import AbstractExtractor from "../AbstractExtractor";
export default class Aliens extends AbstractExtractor {
    protected charset: {
        0x3C: string;
        0x3D: string;
        0x3E: string;
        0x3F: string;
        0x40: string;
        0x5B: string;
    };
    extract(): this;
}
