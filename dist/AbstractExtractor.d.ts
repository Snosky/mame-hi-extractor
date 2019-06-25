import MHEBuffer from "./MHEBuffer";
export default abstract class AbstractExtractor {
    private gameName;
    private hasHi;
    private nvramName;
    protected hi?: MHEBuffer;
    protected nvram?: MHEBuffer;
    protected output: Output;
    init(filePath: string): this;
    abstract extract(): any;
    readonly scores: Output;
    readonly name: string;
}
