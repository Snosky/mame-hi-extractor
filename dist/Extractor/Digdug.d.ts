import AbstractExtractor from "../AbstractExtractor";
export default class Digdug extends AbstractExtractor {
    protected charset: {
        0x35: string;
        0x37: string;
    };
    /**
     * Score are from last to first, reverse loop
     */
    extract(): any;
}
