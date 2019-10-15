import AbstractExtractor from "../AbstractExtractor";
export default class Airbustr extends AbstractExtractor {
    protected charset: {
        0x00: string;
        0x40: string;
    };
    extract(): this;
}
