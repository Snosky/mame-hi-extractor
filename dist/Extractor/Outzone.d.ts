import AbstractExtractor from "../AbstractExtractor";
export default class Outzone extends AbstractExtractor {
    protected charset: {
        0x00: string;
    };
    extract(): any;
}
