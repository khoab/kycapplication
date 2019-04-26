import { DefaultCrudRepository } from '@loopback/repository';
import { Customer } from '../models';
import { BaseDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class CustomerRepository extends DefaultCrudRepository<
  Customer,
  typeof Customer.prototype.id
  > {
  constructor(
    @inject('datasources.Base') dataSource: BaseDataSource,
  ) {
    super(Customer, dataSource);
  }
}
