"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAvailablePathTimes = void 0;
const getAvailablePathTimes = (listPerformance, performance) => {
    let result = [{ start: performance.start, finish: performance.finish }];
    listPerformance.forEach(performanceSet => {
        const tempResult = [];
        result.forEach(performancePath => {
            const { start: minTime, finish: maxTime } = performanceSet;
            const { start, finish } = performancePath;
            if (start >= minTime && finish <= maxTime) {
                return;
            }
            if (start >= maxTime || finish <= minTime) {
                tempResult.push({ start, finish });
                return;
            }
            if (start < minTime) {
                tempResult.push({ start, finish: minTime });
            }
            if (finish > maxTime) {
                tempResult.push({ start: maxTime, finish });
            }
        });
        result = tempResult;
    });
    const availablePathTimes = result.map(eachResult => {
        return Object.assign(Object.assign({}, performance), eachResult);
    });
    return availablePathTimes;
};
exports.getAvailablePathTimes = getAvailablePathTimes;
//# sourceMappingURL=performance.js.map