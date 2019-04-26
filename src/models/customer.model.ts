import { Entity, model, property } from '@loopback/repository';

@model()
export class Customer extends Entity {
  @property({
    id: true,
    type: 'string',
    description: 'The unique identifier for a customer',
  })
  id: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
  })
  firstName: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
  })
  lastName: string;

  @property({
    type: 'string',
    length: 50,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
    length: 15
  })
  idNumber: string;

  @property({
    type: 'string',
    required: true,
    length: 15,
  })
  telephone: string;

  @property({
    type: 'string',
    length: 100,
  })
  address: string;

  constructor(data?: Partial<Customer>) {
    super(data);
  }
}
