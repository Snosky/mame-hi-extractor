import AbstractExtractor from '../AbstractExtractor';
export default class Extractor10yard extends AbstractExtractor {
    protected charset: {
        0x5B: string;
        0x5C: string;
    };
    extract(): this;
}
