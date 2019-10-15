import AbstractExtractor from "../AbstractExtractor";
export default class Tetrisp extends AbstractExtractor {
    protected charset: {
        0x1B: string;
        0x1C: string;
        0x1D: string;
    };
    extract(): any;
}
