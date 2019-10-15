import AbstractExtractor from "../AbstractExtractor";
export default class Outrun extends AbstractExtractor {
    protected charset: {
        0x5B: string;
    };
    extract(): this;
}
