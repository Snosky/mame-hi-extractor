import AbstractExtractor from "../AbstractExtractor";
import Extractor from "../Decorator/Extractor";

@Extractor({
    name: 'gunsmoke'
})
export default class Gunsmoke extends AbstractExtractor {
    protected charset = {
        0x00: '0',
        0x01: '1',
        0x02: '2',
        0x03: '3',
        0x04: '4',
        0x05: '5',
        0x06: '6',
        0x07: '7',
        0x08: '8',
        0x09: '9',
        0x24: ' ',
        0x2E: '*',
        0x2F: '#',
        0x34: '&man;',
        0x35: '&woman;',
        0x3E: '&phone;',
        0x40: '&man;',
        0x41: '&woman;',
        0x43: '&amber;',
        0x45: '&boat;',
        0x48: '&single-music-note;',
        0x49: '&double-music-note;',
        0x4a: '&car-side;',
        0x4e: '&car-front;',
        0x5b: '&dot-in-square;',
        0x60: '&black-diamond;',
        0x61: '&black-spade;',
        0x62: '&heart;',
        0x63: '&black-heart;',
        0x64: '&star;',
        0x65: '&black-star;',
        0x68: '?',
    };

    extract(): any {
        let currentBytes = 0;
        for (let i = 0; i < 5; i++) {
            this.scores.default.push({
                rank: i + 1,
                score: parseInt(this.hi!.slice(currentBytes + 1, 7).nibbleSkip(false).readIntBE().toString(16)) * 10,
                name: this.hi!.slice(currentBytes + 10, 6).byteSkip(false).toString(this.charset, 55)
            });
            currentBytes += 16;
        }
    }
}
