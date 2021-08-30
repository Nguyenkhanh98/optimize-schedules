"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerformanceOutput = exports.PerformanceInput = void 0;
const class_transformer_1 = require("class-transformer");
const formatDateTime = (date) => {
    return new Date(date).toISOString().split('.')[0] + "Z";
};
class PerformanceInput {
    constructor(performance) {
        if (performance) {
            Object.assign(this, (0, class_transformer_1.plainToClass)(PerformanceInput, performance, {
                excludeExtraneousValues: true,
            }));
            this.start = new Date(this.start);
            this.finish = new Date(this.finish);
        }
    }
}
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], PerformanceInput.prototype, "band", void 0);
__decorate([
    (0, class_transformer_1.Transform)(value => new Date(value.value)),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], PerformanceInput.prototype, "start", void 0);
__decorate([
    (0, class_transformer_1.Transform)(value => new Date(value.value)),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], PerformanceInput.prototype, "finish", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], PerformanceInput.prototype, "priority", void 0);
exports.PerformanceInput = PerformanceInput;
class PerformanceOutput {
    constructor(performance) {
        if (performance) {
            Object.assign(this, (0, class_transformer_1.plainToClass)(PerformanceOutput, performance, {
                excludeExtraneousValues: true,
            }));
            this.start = new Date(this.start);
            this.finish = new Date(this.finish);
        }
    }
}
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], PerformanceOutput.prototype, "band", void 0);
__decorate([
    (0, class_transformer_1.Transform)(value => formatDateTime(value.value)),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], PerformanceOutput.prototype, "start", void 0);
__decorate([
    (0, class_transformer_1.Transform)(value => formatDateTime(value.value)),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], PerformanceOutput.prototype, "finish", void 0);
exports.PerformanceOutput = PerformanceOutput;
;
//# sourceMappingURL=Performance.js.map