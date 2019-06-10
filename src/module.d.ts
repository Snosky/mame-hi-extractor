interface Output {
    default: Score[];
    extras?: {[id: string]: Score[]};
}

interface Score {
    rank: number;
    score: number;
    name: string;
    scoreSuffix?: string;
}

declare interface ExtractorOptions {
    name: string,
    hi?: boolean,
    nvram?: string;
}
