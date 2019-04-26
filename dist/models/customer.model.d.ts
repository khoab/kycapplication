import { Entity } from '@loopback/repository';
export declare class Customer extends Entity {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    idNumber: string;
    telephone: string;
    address: string;
    constructor(data?: Partial<Customer>);
}
