import AbstractExtractor from "../AbstractExtractor";
export default class Bankp extends AbstractExtractor {
    protected charset: {
        0x00: string;
        0x3d: string;
    };
    extract(): this;
}
