import AbstractExtractor from "../AbstractExtractor";
export default class Digdug2 extends AbstractExtractor {
    protected charset: {
        0x5B: string;
    };
    extract(): any;
}
