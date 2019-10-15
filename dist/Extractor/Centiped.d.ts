import AbstractExtractor from '../AbstractExtractor';
export default class Centiped extends AbstractExtractor {
    extract(): this;
    protected extractNvram(): void;
    protected extractHi(): void;
}
