import AbstractExtractor from "../AbstractExtractor";
export default class Starwars extends AbstractExtractor {
    protected charset: {
        0x00: string;
    };
    extract(): this;
}
