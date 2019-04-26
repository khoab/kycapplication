import { Request, RestBindings, requestBody } from '@loopback/rest';
import { inject } from '@loopback/context';
import { Filter, repository } from '@loopback/repository';
import { param, post, get, put, del, getFilterSchemaFor } from '@loopback/rest';
import { Customer } from '../models';
import { CustomerRepository } from '../repositories';

export class CustomerController {
  constructor(
    @repository(CustomerRepository) public customerRepository: CustomerRepository,
    @inject(RestBindings.Http.REQUEST) private req: Request) {
  }

  // Create function
  @post('/customers')
  async create(@requestBody() customer: Customer): Promise<Customer> {
    const savedCustomer = await this.customerRepository.create(customer);
    return savedCustomer;
  }

  // Search function
  @get('/customers', {
    responses: {
      '200': {
        description: 'Array of customer model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Customer } },
          },
        },
      },
    },
  })
  async findCustomers(@param.query.object('filter', getFilterSchemaFor(Customer)) filter?: Filter, ): Promise<Customer[]> {
    return await this.customerRepository.find(filter);
  }

  // Search by ID function
  @get('/customers/{customerId}', {
    responses: {
      '200': {},
    },
  })
  async findById(
    @param.path.string('customerId') customerId: string): Promise<Customer> {
    return await this.customerRepository.findById(customerId, {});
  }

  // Del by Id function
  @del('/customers/{customerId}')
  async remove(@param.path.string('customerId') customerId: string) {
    return await this.customerRepository.deleteById(customerId);
  }

  // Change cusInfo by Id function
  @put('/customers/{customerId}')
  async replaceCustomer(
    @param.path.string('customerId') customerId: string,
    @requestBody() customer: Customer, ): Promise<void> {
    return await this.customerRepository.replaceById(customerId, customer);
  }
}
