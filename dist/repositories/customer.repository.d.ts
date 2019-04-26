import { DefaultCrudRepository } from '@loopback/repository';
import { Customer } from '../models';
import { BaseDataSource } from '../datasources';
export declare class CustomerRepository extends DefaultCrudRepository<Customer, typeof Customer.prototype.id> {
    constructor(dataSource: BaseDataSource);
}
