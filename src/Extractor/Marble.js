"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractExtractor_1 = __importDefault(require("../AbstractExtractor"));
class Marble extends AbstractExtractor_1.default {
    extract() {
        for (let i = 0; i < this.buffer.length; i += 5) {
            console.log(this.buffer.readIntBE(i, 3), this.decodeBase40(this.buffer.slice(i + 3, i + 3 + 2)));
        }
    }
}
exports.default = Marble;
