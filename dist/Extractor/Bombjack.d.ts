import AbstractExtractor from '../AbstractExtractor';
export default class Bombjack extends AbstractExtractor {
    protected charset: {
        0x00: string;
        0x2E: string;
    };
    extract(): this;
}
