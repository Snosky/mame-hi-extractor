import AbstractExtractor from "../AbstractExtractor";
export default class Cninja extends AbstractExtractor {
    protected charset: {
        0x5B: string;
    };
    extract(): this;
}
