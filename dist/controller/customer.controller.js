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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("@loopback/rest");
const context_1 = require("@loopback/context");
const repository_1 = require("@loopback/repository");
const rest_2 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CustomerController = class CustomerController {
    constructor(customerRepository, req) {
        this.customerRepository = customerRepository;
        this.req = req;
    }
    // Create function
    async create(customer) {
        const savedCustomer = await this.customerRepository.create(customer);
        return savedCustomer;
    }
    // Search function
    async findCustomers(filter) {
        return await this.customerRepository.find(filter);
    }
    // Search by ID function
    async findById(customerId) {
        return await this.customerRepository.findById(customerId, {});
    }
    // Del by Id function
    async remove(customerId) {
        return await this.customerRepository.deleteById(customerId);
    }
    // Change cusInfo by Id function
    async replaceCustomer(customerId, customer) {
        return await this.customerRepository.replaceById(customerId, customer);
    }
};
__decorate([
    rest_2.post('/customers'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Customer]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "create", null);
__decorate([
    rest_2.get('/customers', {
        responses: {
            '200': {
                description: 'Array of customer model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Customer } },
                    },
                },
            },
        },
    }),
    __param(0, rest_2.param.query.object('filter', rest_2.getFilterSchemaFor(models_1.Customer))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "findCustomers", null);
__decorate([
    rest_2.get('/customers/{customerId}', {
        responses: {
            '200': {},
        },
    }),
    __param(0, rest_2.param.path.string('customerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "findById", null);
__decorate([
    rest_2.del('/customers/{customerId}'),
    __param(0, rest_2.param.path.string('customerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "remove", null);
__decorate([
    rest_2.put('/customers/{customerId}'),
    __param(0, rest_2.param.path.string('customerId')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Customer]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "replaceCustomer", null);
CustomerController = __decorate([
    __param(0, repository_1.repository(repositories_1.CustomerRepository)),
    __param(1, context_1.inject(rest_1.RestBindings.Http.REQUEST)),
    __metadata("design:paramtypes", [repositories_1.CustomerRepository, Object])
], CustomerController);
exports.CustomerController = CustomerController;
//# sourceMappingURL=customer.controller.js.map