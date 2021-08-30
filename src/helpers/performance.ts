import {PerformanceOutput} from "@interfaces/Performance";

interface TimeSegment {
    start: Date,
    finish: Date
}
export const getAvailablePathTimes = (listPerformance: PerformanceOutput[], performance: PerformanceOutput): PerformanceOutput[] => {

    let result: TimeSegment[] = [{start: performance.start, finish: performance.finish}];

    listPerformance.forEach(performanceSet => {

        const tempResult: TimeSegment[] = [];

        result.forEach(performancePath => {

            const {start: minTime, finish: maxTime} = performanceSet;
            const {start, finish} = performancePath;


            if (start >= minTime && finish <= maxTime) {
                return;
            }

            if (start >= maxTime || finish <= minTime) {
                tempResult.push({start, finish});
                return;
            }

            if (start < minTime) {
                tempResult.push({start, finish: minTime});
            }

            if (finish > maxTime) {
                tempResult.push({start: maxTime, finish})
            }
        });
        result = tempResult;
    });

    const availablePathTimes = result.map(eachResult => {
        return {...performance, ...eachResult}
    });

    return availablePathTimes;
}