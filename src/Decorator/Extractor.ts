export default function Extractor(options: ExtractorOptions) {
    return <T extends {new(...args:any[]):{}}>(constructor:T) => {
        return class extends constructor {
            gameName = options.name;
            hasHi = options.hi || false;
            nvramName = options.nvram || false;
        }
    }
}
