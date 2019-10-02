export interface Output {
    default: Score[];
    extras?: {[id: string]: Score[]};
}

export interface Score {
    rank: number;
    score: number;
    name: string;
    scoreSuffix?: string;
    round?: string;
    // character?: number; Character ID
}

export interface ExtractorOptions {
    name: string,
    hi?: boolean,
    nvram?: string;
}
