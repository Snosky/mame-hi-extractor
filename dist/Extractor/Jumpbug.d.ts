import AbstractExtractor from "../AbstractExtractor";
export default class Jumpbug extends AbstractExtractor {
    extract(): this;
    /**
     * Weird "low-endian" original buffer after nibble skip loop like "00 65 03", so you have to read left ro right but reverse nibbles
     * @param startByte
     * @TODO : Maybe make it global, or use a function to swap nibbles
     */
    protected getScore(startByte: number): number;
}
