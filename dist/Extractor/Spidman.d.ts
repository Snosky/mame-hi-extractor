import AbstractExtractor from "../AbstractExtractor";
export default class Spidman extends AbstractExtractor {
    protected charset: {
        0x00: string;
    };
    extract(withExtra?: boolean): this;
}
