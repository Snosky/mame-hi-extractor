import AbstractExtractor from "../AbstractExtractor";
export default class Tetris extends AbstractExtractor {
    protected charset: {
        0x00: string;
        0x5E: string;
    };
    extract(): this;
}
