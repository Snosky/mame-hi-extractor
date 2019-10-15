import AbstractExtractor from "../AbstractExtractor";
export default class Donpachi extends AbstractExtractor {
    protected charset: {
        0x00: string;
        0x38: string;
    };
    extract(): this;
}
