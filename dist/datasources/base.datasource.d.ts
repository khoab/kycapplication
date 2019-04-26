import { juggler } from '@loopback/repository';
export declare class BaseDataSource extends juggler.DataSource {
    static dataSourceName: string;
    constructor(pkg: any, dsConfig?: any);
}
