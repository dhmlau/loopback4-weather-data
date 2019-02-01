# loopback4-weather-data

[![LoopBack](<https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png>)](http://loopback.io/)

_Still under development_

This LoopBack 4 application shows how to connect to weather data service on IBM Cloud.

Possible addition:

- add the frontend on top of this application, maybe React or Angular
- deploy to IBM Cloud

## What I've done to connect to Weather data

It is similar to steps in https://loopback.io/doc/en/lb4/soap-calculator-tutorial.html, and referencing the implementation in https://github.com/strongloop/loopback4-example-shopping.

1. Scaffold the app
2. Add datasource

```sh
$ lb4 datasource
? Datasource name: weatherds
? Select the connector for weatherds: REST services (supported by StrongLoop)
? Base URL for the REST service: https://twcservice.mybluemix.net/api/weather
? Default options for the request:
? An array of operation templates:
? Use default CRUD mapping: No
   create src/datasources/weatherds.datasource.json
   create src/datasources/weatherds.datasource.ts

```

3. Add a service

```sh
$ lb4 service
? Please select the datasource WeatherdsDatasource
? Service name: WeatherService
   create src/services/weather-service.service.ts
   update src/services/index.ts

Service WeatherService was created in src/services/
```

4. Add a controller

```sh
$ lb4 controller
? Controller class name: WeatherController
? What kind of controller would you like to generate? Empty Controller
   create src/controllers/weather-controller.controller.ts
   update src/controllers/index.ts

Controller WeatherController was created in src/controllers/
```

5. Edit `weatherds.datasource.json` to include `operations` attribute

```json
"operations": [
    {
      "template": {
        "method": "GET",
        "url": "https://twcservice.mybluemix.net/api/weather/v1/geocode/{latitude}/{longitude}/forecast/daily/3day.json"
      },
      "functions": {
        "get3DayForecast": ["latitude", "longitude"]
      }
    }
  ]
```

Question: do I need to add the operations one by one? Can it be generated?

6. Create the Forecasts model that contains DailyForecast

7. Create DailyForecast that contains max and min of the temperature

8. Edit the Forecasts model to have `hasMany` DailyForecast.

9. Edit `weather-controller.controller.ts`
   Add the function in the controller.
