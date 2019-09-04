import AbstractExtractor from "../AbstractExtractor";
export default class Robocop extends AbstractExtractor {
    protected charset: {
        0x00: string;
    };
    extract(): any;
}
