import {Model, model, property} from '@loopback/repository';

@model()
export class DailyForecast extends Model {
  @property({
    type: 'number',
  })
  max_temp?: number;

  @property({
    type: 'number',
  })
  min_temp?: number;

  @property({
    type: 'number',
  })
  num?: number;

  constructor(data?: Partial<DailyForecast>) {
    super(data);
  }
}
