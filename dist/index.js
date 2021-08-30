"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.optimizeSchedule = void 0;
require("reflect-metadata");
const class_transformer_1 = require("class-transformer");
const path_1 = __importDefault(require("path"));
const _configs_1 = require("./configs");
const readFile_1 = require("./helpers/readFile");
const Performance_1 = require("./interfaces/Performance");
const performance_1 = require("./helpers/performance");
const optimizeSchedule = (listPerformanceInput) => {
    let listPerformanceOutput = [];
    listPerformanceInput.sort((a, b) => b.priority - a.priority);
    const firstPerformance = listPerformanceInput.shift();
    listPerformanceOutput.push({ band: firstPerformance.band, start: firstPerformance.start, finish: firstPerformance.finish });
    let { start: MIN_TIME, finish: MAX_TIME } = firstPerformance;
    listPerformanceInput.forEach(iPerformance => {
        const { start, finish, band } = iPerformance;
        const minTime = MIN_TIME, maxTime = MAX_TIME;
        if (start < MIN_TIME) {
            MIN_TIME = start;
        }
        if (finish > MAX_TIME) {
            MAX_TIME = finish;
        }
        if (start >= maxTime || finish <= minTime) {
            listPerformanceOutput.push({ band, start, finish });
            return;
        }
        const availablePathTimes = (0, performance_1.getAvailablePathTimes)(listPerformanceOutput, { band, start, finish });
        listPerformanceOutput = [...listPerformanceOutput, ...availablePathTimes];
    });
    listPerformanceOutput.sort((a, b) => a.start > b.start ? 1 : -1);
    return (0, class_transformer_1.deserializeArray)(Performance_1.PerformanceOutput, JSON.stringify(listPerformanceOutput));
    ;
};
exports.optimizeSchedule = optimizeSchedule;
(async () => {
    let performanceInputJSON = await (0, readFile_1.readInput)(path_1.default.join(_configs_1.IO_LOCATION, _configs_1.INPUT_FILE_NAME));
    const listPerformances = (0, class_transformer_1.deserializeArray)(Performance_1.PerformanceInput, performanceInputJSON);
    const listPerformanceOptimized = (0, exports.optimizeSchedule)(listPerformances);
    await (0, readFile_1.writeOutput)(listPerformanceOptimized, path_1.default.join(_configs_1.IO_LOCATION, _configs_1.OUTPUT_FILE_NAME));
    console.log(`Optimizing successfully, please check ${_configs_1.IO_LOCATION}\\${_configs_1.OUTPUT_FILE_NAME}`);
})();
//# sourceMappingURL=index.js.map