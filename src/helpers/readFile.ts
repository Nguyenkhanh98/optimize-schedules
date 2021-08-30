import fs from 'fs';
import {PerformanceInput, PerformanceOutput} from '@interfaces/Performance';

export const readInput = async (path: string): Promise<any> => {
    try {
        const input = await fs.readFileSync(path);
        return input.toString();
    } catch (error) {
        process.exit(1);
    }
}

export const writeOutput = async (data: PerformanceOutput[], path: string): Promise<void> => {
    try {
        return await fs.writeFileSync(path, JSON.stringify(data));
    } catch (error) {
        process.exit(1);
    }
}