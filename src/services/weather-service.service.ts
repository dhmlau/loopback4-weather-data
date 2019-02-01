import {getService} from '@loopback/service-proxy';
import {inject, Provider} from '@loopback/core';
import {WeatherdsDataSource} from '../datasources';
import {Forecasts} from '../models';

export interface WeatherServiceService {
  // this is where you define the Node.js methods that will be
  // mapped to the SOAP operations as stated in the datasource
  // json file.
  get3DayForecast(latitude: number, longitude: number): Promise<Forecasts>;
}

export class WeatherServiceServiceProvider
  implements Provider<WeatherServiceService> {
  constructor(
    // weatherds must match the name property in the datasource json file
    @inject('datasources.weatherds')
    protected dataSource: WeatherdsDataSource = new WeatherdsDataSource(),
  ) {}

  value(): Promise<WeatherServiceService> {
    return getService(this.dataSource);
  }
}
