import AbstractExtractor from "../AbstractExtractor";
export default class Suprmrio extends AbstractExtractor {
    protected charset: {
        0x24: string;
        0x28: string;
        0x2B: string;
        0xAF: string;
        0xFA: string;
    };
    extract(): any;
}
