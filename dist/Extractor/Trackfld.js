"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractExtractor_1 = __importDefault(require("../AbstractExtractor"));
const path_1 = require("path");
class Trackfld extends AbstractExtractor_1.default {
    constructor(filePath) {
        super(path_1.join(filePath, 'trackfld', 'nvram'));
    }
    extract() {
        let currentByte = 1024; // Jump first 1024 Bytes
        let extraIds = [
            'run',
            'longJump',
            'javelin',
            'hurdles',
            'hammer',
            'highJump'
        ];
        this.output.extras = {};
        for (const extra of extraIds) {
            this.output.extras[extra] = [];
            for (let i = 0; i < 4; i++) { // All extras hiscores are by group of 4
                this.output.extras[extra].push({
                    rank: i + 1,
                    score: this.buffer.slice(currentByte, currentByte + 4).decodeBCD() / 100,
                    name: this.asciiOffset(this.buffer.slice(currentByte + 4, currentByte + 7).buffer.toString(), 48),
                    scoreSuffix: ['run', 'hurdles'].indexOf(extra) >= 0 ? 'sec' : 'm'
                });
                currentByte += 8;
            }
        }
        for (let i = 0; i < 160; i++) { // Next 160 groups of 5 bytes are default scores
            this.output.default.push({
                rank: i + 1,
                score: Number.parseInt(this.buffer.buffer.readIntBE(currentByte, 3).toString(16)) * 10,
                name: this.buffer.slice(currentByte + 3, currentByte + 5).decodeBase32()
            });
            currentByte += 5;
        }
    }
}
exports.default = Trackfld;
