import AbstractExtractor from "../AbstractExtractor";
export default class Armorcar extends AbstractExtractor {
    protected charset: {
        0x40: string;
    };
    extract(): this;
}
