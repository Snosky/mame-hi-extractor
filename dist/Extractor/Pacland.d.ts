import AbstractExtractor from "../AbstractExtractor";
export default class Pacland extends AbstractExtractor {
    protected charset: {
        0xE4: string;
        0xE5: string;
        0xE6: string;
        0xE7: string;
    };
    extract(): this;
}
