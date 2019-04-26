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
const repository_1 = require("@loopback/repository");
let Customer = class Customer extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
__decorate([
    repository_1.property({
        id: true,
        type: 'string',
        description: 'The unique identifier for a customer',
    }),
    __metadata("design:type", String)
], Customer.prototype, "id", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
        length: 50,
    }),
    __metadata("design:type", String)
], Customer.prototype, "firstName", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
        length: 50,
    }),
    __metadata("design:type", String)
], Customer.prototype, "lastName", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        length: 50,
    }),
    __metadata("design:type", String)
], Customer.prototype, "email", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
        length: 15
    }),
    __metadata("design:type", String)
], Customer.prototype, "idNumber", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
        length: 15,
    }),
    __metadata("design:type", String)
], Customer.prototype, "telephone", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        length: 100,
    }),
    __metadata("design:type", String)
], Customer.prototype, "address", void 0);
Customer = __decorate([
    repository_1.model(),
    __metadata("design:paramtypes", [Object])
], Customer);
exports.Customer = Customer;
//# sourceMappingURL=customer.model.js.map