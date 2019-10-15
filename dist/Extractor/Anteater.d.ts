import AbstractExtractor from "../AbstractExtractor";
export default class Anteater extends AbstractExtractor {
    protected charset: {
        0x40: string;
    };
    extract(): this;
}
