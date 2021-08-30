import { PerformanceOutput } from '../interfaces/Performance';
export declare const readInput: (path: string) => Promise<any>;
export declare const writeOutput: (data: PerformanceOutput[], path: string) => Promise<void>;
