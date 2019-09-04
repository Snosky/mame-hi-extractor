export interface Output {
    default: Score[];
    extras?: {
        [id: string]: Score[];
    };
}
export interface Score {
    rank: number;
    score: number;
    name: string;
    scoreSuffix?: string;
}
export interface ExtractorOptions {
    name: string;
    hi?: boolean;
    nvram?: string;
}
