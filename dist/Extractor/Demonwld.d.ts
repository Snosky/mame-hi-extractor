import AbstractExtractor from "../AbstractExtractor";
export default class Demonwld extends AbstractExtractor {
    protected charset: {
        0x5B: string;
    };
    extract(): any;
}
