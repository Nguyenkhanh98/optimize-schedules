"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IO_LOCATION = exports.OUTPUT_FILE_NAME = exports.INPUT_FILE_NAME = void 0;
const path_1 = __importDefault(require("path"));
const locationARG = process.argv.pop() || 'data/input.json';
const [folderName, file] = locationARG.split('/');
const [fileName, extension] = file.split('.');
const INPUT_FILE_NAME = file;
exports.INPUT_FILE_NAME = INPUT_FILE_NAME;
const OUTPUT_FILE_NAME = `${fileName}.optimal.json`;
exports.OUTPUT_FILE_NAME = OUTPUT_FILE_NAME;
const IO_LOCATION = path_1.default.join(__dirname, '..', folderName);
exports.IO_LOCATION = IO_LOCATION;
//# sourceMappingURL=index.js.map