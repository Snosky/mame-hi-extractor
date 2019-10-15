import MHEBuffer from "./MHEBuffer";
import { ExtractorOptionsData, ExtractorOptionsDataCharacters, Output } from "./interfaces";
export default abstract class AbstractExtractor {
    private gameName;
    private hasHi;
    private nvramName;
    protected hi?: MHEBuffer;
    protected nvram?: MHEBuffer;
    protected data?: ExtractorOptionsData;
    protected output: Output;
    init(filePath: string): this;
    abstract extract(withExtra?: boolean): this;
    readonly scores: Output;
    readonly name: string;
    readonly characters: ExtractorOptionsDataCharacters | null;
}
