/// <reference types="node" />
export default class MHEBuffer {
    buffer: Buffer;
    constructor(file: Buffer);
    slice(begin?: number, size?: number): MHEBuffer;
    trim(trimNeedle: number): MHEBuffer;
    decodeBase40(): string;
    decodeBase32(): string;
    /**
     * Decode a BCD buffer in Big Endian
     */
    decodeBCD(): number;
    /**
     * Decode a BCD in Little Endian
     */
    decodeBCDLE(): number;
    /**
     * Skip even or odd bytes
     * @param even
     */
    byteSkip(even: boolean): MHEBuffer;
    nibbleSkip(even?: boolean): MHEBuffer;
    byteMap(fn: (byte: number) => number): this;
    readIntBE(): number;
    readIntLE(): number;
    toStringLE(charset?: {
        [key: number]: string;
    }, offset?: number): string;
    /**
     * Return the buffer hexa as a number
     * Example : Buffer = 0x0872 => return 872
     * @param rtl right-to-left, reverse te returned value, ex: Buffer = 0x0872 => return 2780
     */
    toHexNumber(rtl?: boolean): number;
    /**
     * Swap x number of byte
     * Example: swap = 2, buffer = 0xF0E1 => return 0xE1F0
     * Example: swap = 4, buffer = 0xF0E1D2C3 => return 0xC3D2E1F0
     * @param swap
     */
    byteSwap(swap: number): this;
    /**
     * Remove unwanted bytes
     * Example: buffer = 0x52502424, filteredBytes = 0x24 => return 0x5250
     * @param filteredBytes
     */
    byteFilter(filteredBytes: number | number[]): this;
    toString(charset?: {
        [key: number]: string;
    }, offset?: number): string;
}
