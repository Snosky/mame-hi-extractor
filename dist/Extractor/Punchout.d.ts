import AbstractExtractor from "../AbstractExtractor";
export default class Punchout extends AbstractExtractor {
    extract(): any;
    protected extractNvram(): void;
    protected extractHi(): void;
}
