import AbstractExtractor from "../AbstractExtractor";
export default class Aquajack extends AbstractExtractor {
    protected charset: {
        0x5E: string;
    };
    extract(): this;
}
