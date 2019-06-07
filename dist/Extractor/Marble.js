"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractExtractor_1 = __importDefault(require("../AbstractExtractor"));
const path_1 = require("path");
class Marble extends AbstractExtractor_1.default {
    constructor(filePath) {
        super(path_1.join(filePath, 'marble.hi'));
    }
    extract() {
        let rank = 1;
        for (let i = 0; i < this.buffer.buffer.length; i += 5) {
            this.output.default.push({
                rank: rank++,
                score: this.buffer.buffer.readIntBE(i, 3),
                name: this.buffer.slice(i + 3, i + 3 + 2).decodeBase40()
            });
        }
    }
}
exports.default = Marble;
