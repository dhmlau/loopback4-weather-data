import {Model, model, property, hasMany} from '@loopback/repository';
import {DailyForecast} from './daily-forecast.model';

@model()
export class Forecasts extends Model {
  @property({
    type: 'number',
    required: true,
  })
  latitude: number;

  @property({
    type: 'number',
  })
  longitude?: number;

  // @property({
  //   type: 'array',
  //   itemType: 'object',
  // })
  // forecasts?: object[];

  @hasMany(() => DailyForecast)
  forecasts: DailyForecast[];

  constructor(data?: Partial<Forecasts>) {
    super(data);
  }
}
