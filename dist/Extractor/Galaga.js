"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractExtractor_1 = __importDefault(require("../AbstractExtractor"));
const path_1 = require("path");
class Galaga extends AbstractExtractor_1.default {
    constructor(filePath) {
        super(path_1.join(filePath, 'galaga.hi'));
    }
    extract() {
        let currentByte = 0;
        for (let i = 0; i < 5; i++) {
            console.log(this.buffer.slice(currentByte, currentByte + 6).buffer);
            // console.log(this.buffer.slice(currentByte, currentByte + 6).trim(0x24).decodeBCDLE());
            // this.output.default.push({
            //     rank: i + 1,
            //     score: this.buffer.slice(currentByte, currentByte + 6).trim(0x24).decodeBCDLE(),
            //     name: ''
            // });
            currentByte += 6;
        }
    }
}
exports.default = Galaga;
