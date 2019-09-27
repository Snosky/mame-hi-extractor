import AbstractExtractor from "../AbstractExtractor";
export default class Arabfgt extends AbstractExtractor {
    protected charset: {
        0x00: string;
        0x2E: string;
    };
    extract(): any;
}
