import 'reflect-metadata';
import {deserializeArray} from 'class-transformer';
import path from 'path';


import {
    INPUT_FILE_NAME,
    OUTPUT_FILE_NAME,
    IO_LOCATION
} from '@configs';
import {readInput, writeOutput} from '@helpers/readFile';
import {PerformanceInput, PerformanceOutput} from '@interfaces/Performance';
import {getAvailablePathTimes} from '@helpers/performance';

export const optimizeSchedule = (listPerformanceInput: PerformanceInput[]): PerformanceOutput[] => {

    let listPerformanceOutput: PerformanceOutput[] = [];

    listPerformanceInput.sort((a, b) => b.priority - a.priority);

    const firstPerformance = listPerformanceInput.shift();

    listPerformanceOutput.push({band: firstPerformance.band, start: firstPerformance.start, finish: firstPerformance.finish});

    let {start: MIN_TIME, finish: MAX_TIME} = firstPerformance;

    listPerformanceInput.forEach(iPerformance => {
        const {start, finish, band} = iPerformance;

        const minTime = MIN_TIME, maxTime = MAX_TIME;

        if (start < MIN_TIME) {
            MIN_TIME = start;
        }

        if (finish > MAX_TIME) {
            MAX_TIME = finish;
        }

        if (start >= maxTime || finish <= minTime) {
            listPerformanceOutput.push({band, start, finish})
            return;
        }

        const availablePathTimes = getAvailablePathTimes(listPerformanceOutput, {band, start, finish});

        listPerformanceOutput = [...listPerformanceOutput, ...availablePathTimes];

    })

    listPerformanceOutput.sort((a, b) => a.start > b.start ? 1 : -1);


    return deserializeArray(PerformanceOutput, JSON.stringify(listPerformanceOutput));;
};

(async () => {
    let performanceInputJSON = await readInput(path.join(IO_LOCATION, INPUT_FILE_NAME));
    const listPerformances = deserializeArray(PerformanceInput, performanceInputJSON);

    const listPerformanceOptimized = optimizeSchedule(listPerformances);

    await writeOutput(listPerformanceOptimized, path.join(IO_LOCATION, OUTPUT_FILE_NAME));

    console.log(`Optimizing successfully, please check ${IO_LOCATION}\\${OUTPUT_FILE_NAME}`)
})();