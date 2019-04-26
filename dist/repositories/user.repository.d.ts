import { DefaultCrudRepository } from '@loopback/repository';
import { User } from '../models';
import { BaseDataSource } from '../datasources';
export declare type Credentials = {
    email: string;
    password: string;
};
export declare class UserRepository extends DefaultCrudRepository<User, typeof User.prototype.id> {
    constructor(dataSource: BaseDataSource);
}
