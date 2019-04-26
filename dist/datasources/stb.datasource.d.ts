import { juggler } from '@loopback/repository';
export declare class StbDataSource extends juggler.DataSource {
    static dataSourceName: string;
    constructor(dsConfig?: object);
}
