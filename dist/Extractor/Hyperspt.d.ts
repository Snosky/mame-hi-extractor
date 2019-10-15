import AbstractExtractor from "../AbstractExtractor";
export default class Hyperspt extends AbstractExtractor {
    protected extraIds: string[];
    extract(): this;
    protected formatScore(score: number, id: string): number;
    protected getScoreSuffix(id: string): "" | "sec" | "m" | "kg";
}
