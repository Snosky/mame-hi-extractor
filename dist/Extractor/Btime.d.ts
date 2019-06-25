import AbstractExtractor from '../AbstractExtractor';
export default class Btime extends AbstractExtractor {
    protected charset: {
        0x00: string;
        0xCC: string;
        0xCD: string;
        0xCE: string;
        0xCF: string;
    };
    extract(): void;
}
