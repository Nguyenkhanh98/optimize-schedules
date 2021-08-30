"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeOutput = exports.readInput = void 0;
const fs_1 = __importDefault(require("fs"));
const readInput = async (path) => {
    try {
        const input = await fs_1.default.readFileSync(path);
        return input.toString();
    }
    catch (error) {
        process.exit(1);
    }
};
exports.readInput = readInput;
const writeOutput = async (data, path) => {
    try {
        return await fs_1.default.writeFileSync(path, JSON.stringify(data));
    }
    catch (error) {
        process.exit(1);
    }
};
exports.writeOutput = writeOutput;
//# sourceMappingURL=readFile.js.map