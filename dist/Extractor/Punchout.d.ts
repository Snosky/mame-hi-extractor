import AbstractExtractor from "../AbstractExtractor";
export default class Punchout extends AbstractExtractor {
    extract(): this;
    protected extractNvram(): void;
    protected extractHi(): void;
}
