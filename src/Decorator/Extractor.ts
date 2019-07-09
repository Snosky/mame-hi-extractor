import {ExtractorOptions} from "../interfaces";

export default function Extractor(options: ExtractorOptions) {
    return <T extends {new(...args:any[]):{}}>(constructor:T) => {
        return class extends constructor {
            gameName = options.name;
            hasHi = options.hi === undefined ? true : options.hi;
            nvramName = options.nvram || false;
        }
    }
}
