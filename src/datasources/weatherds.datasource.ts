import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './weatherds.datasource.json';

export class WeatherdsDataSource extends juggler.DataSource {
  static dataSourceName = 'weatherds';

  constructor(
    @inject('datasources.config.weatherds', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
