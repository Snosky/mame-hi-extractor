import AbstractExtractor from "../AbstractExtractor";
export default class Armedf extends AbstractExtractor {
    protected charset: {
        0x5B: string;
        0x5C: string;
        0x5D: string;
        0x5E: string;
    };
    extract(): this;
}
