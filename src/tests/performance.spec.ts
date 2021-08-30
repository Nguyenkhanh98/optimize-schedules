import {PerformanceInput} from '../interfaces/Performance';
import {deserializeArray} from 'class-transformer';
import {optimizeSchedule} from '..';

import dataTest from './data.json';


test.each(dataTest)('expected optimized  result', (input) => {
    const {data, result} = input;
    const performances = deserializeArray(PerformanceInput, JSON.stringify(data));
    const optimzedSchedule = optimizeSchedule(performances);
    expect(JSON.stringify(optimzedSchedule)).toBe(JSON.stringify(input.result));
})