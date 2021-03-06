import { ExtractorOptions } from "../interfaces";
export default function Extractor(options: ExtractorOptions): <T extends new (...args: any[]) => {}>(constructor: T) => {
    new (...args: any[]): {
        gameName: string;
        hasHi: boolean;
        nvramName: string | boolean;
        data: import("../interfaces").ExtractorOptionsData | undefined;
    };
} & T;
