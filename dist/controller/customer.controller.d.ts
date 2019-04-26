/// <reference types="express" />
import { Request } from '@loopback/rest';
import { Filter } from '@loopback/repository';
import { Customer } from '../models';
import { CustomerRepository } from '../repositories';
export declare class CustomerController {
    customerRepository: CustomerRepository;
    private req;
    constructor(customerRepository: CustomerRepository, req: Request);
    create(customer: Customer): Promise<Customer>;
    findCustomers(filter?: Filter): Promise<Customer[]>;
    findById(customerId: string): Promise<Customer>;
    remove(customerId: string): Promise<void>;
    replaceCustomer(customerId: string, customer: Customer): Promise<void>;
}
