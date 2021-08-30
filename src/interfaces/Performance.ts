import {plainToClass, Expose, Transform} from "class-transformer";


const formatDateTime = (date: Date) => {
    return new Date(date).toISOString().split('.')[0] + "Z";
}

export class PerformanceInput {
    @Expose()
    band: string

    @Transform(value => new Date(value.value))
    @Expose()
    start: Date

    @Transform(value => new Date(value.value))
    @Expose()
    finish: Date

    @Expose()
    priority: number

    constructor(performance: PerformanceInput) {
        if (performance) {
            Object.assign(this,
                plainToClass(PerformanceInput, performance, {
                    excludeExtraneousValues: true,
                }));
            this.start = new Date(this.start);
            this.finish = new Date(this.finish);
        }
    }
}

export class PerformanceOutput {

    @Expose()
    band: string

    @Transform(value => formatDateTime(value.value))
    @Expose()
    start: Date

    @Transform(value => formatDateTime(value.value))

    @Expose()
    finish: Date

    constructor(performance: PerformanceOutput) {
        if (performance) {
            Object.assign(this,
                plainToClass(PerformanceOutput, performance, {
                    excludeExtraneousValues: true,
                }));
            this.start = new Date(this.start);
            this.finish = new Date(this.finish);
        }
    }

};