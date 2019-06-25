import AbstractExtractor from "../AbstractExtractor";
export default class Paperboy extends AbstractExtractor {
    protected charset: {
        0x20: string;
    };
    extract(): any;
}
