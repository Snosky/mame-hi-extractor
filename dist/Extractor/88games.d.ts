import AbstractExtractor from "../AbstractExtractor";
export default class Extractor88Games extends AbstractExtractor {
    protected extraCharset: {
        0x0d: string;
    };
    protected defaultCharset: {
        0x0E: string;
    };
    extract(): this;
    protected formatScore(score: number, extra: string): number;
    protected getScoreSuffix(extra: string): "" | "m" | "s";
}
