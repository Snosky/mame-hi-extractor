import AbstractExtractor from '../AbstractExtractor';
export default class Bosco extends AbstractExtractor {
    protected charset: {
        0x34: string;
        0x24: string;
    };
    extract(): any;
}
