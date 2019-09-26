import AbstractExtractor from "../AbstractExtractor";
export default class Airattck extends AbstractExtractor {
    protected charset: {
        0x8F: string;
    };
    extract(): any;
}
