"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Galaga_1 = __importDefault(require("./Extractor/Galaga"));
// console.log((new Marble('/home/tpayen/.mame/hi')).scores);
// (new Trackfld('/home/tpayen/.mame/nvram')).scores;
console.log((new Galaga_1.default('/home/tpayen/.mame/hi')).scores);
