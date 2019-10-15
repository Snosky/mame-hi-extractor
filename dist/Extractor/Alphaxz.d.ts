import AbstractExtractor from "../AbstractExtractor";
export default class Alphaxz extends AbstractExtractor {
    protected charset: {
        0x2A: string;
    };
    extract(): this;
}
