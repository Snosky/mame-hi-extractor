export interface Output {
    default: Score[];
    extras?: {[id: string]: Score[]};
}

export interface Score {
    rank: number;
    score: number;
    name: string;
    scoreSuffix?: string;
    extra?: any
}

export interface ScoreExtra {
    round?: string;
    character?: number; // Character ID
    stage?: number;
}

export interface ExtractorOptions {
    name: string,
    hi?: boolean,
    nvram?: string;
    data?: ExtractorOptionsData;
}

export interface ExtractorOptionsData {
    characters?: ExtractorOptionsDataCharacters;
}

export interface ExtractorOptionsDataCharacters {
    [key: number]: string;
}
