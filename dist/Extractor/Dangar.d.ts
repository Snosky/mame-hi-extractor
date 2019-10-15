import AbstractExtractor from "../AbstractExtractor";
export default class Dangar extends AbstractExtractor {
    protected charset: {
        0x20: string;
        0x2E: string;
    };
    /**
     * Scores are reversed, latest to first, so we doing the loop in reverse
     */
    extract(): this;
}
