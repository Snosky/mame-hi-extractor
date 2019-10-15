import AbstractExtractor from "../AbstractExtractor";
export default class Spang extends AbstractExtractor {
    protected charset: {
        [key: number]: string;
    };
    extract(): this;
}
