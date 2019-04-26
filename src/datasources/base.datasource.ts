import { inject } from '@loopback/core';
import { juggler } from '@loopback/repository';
import * as config from './base.datasource.json';

export class BaseDataSource extends juggler.DataSource {
  static dataSourceName = 'Base';

  constructor(
    @inject('application.package') pkg: any,
    @inject('datasources.config.Base', { optional: true })
    dsConfig: any = config,
  ) {
    //TODO: loopback cli issue - cannot discovery base datasource
    dsConfig.database = pkg.name;
    super(dsConfig);
  }
}
