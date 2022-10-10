import { openweatherAPI, weatherbitAPI } from '@/axios';
import { IAPIResponse, OpenWeather, WeatherBit } from '@/types';

export class WeatherService {
  static async getOpenWeatherForecast(
    lat: number,
    lon: number,
  ): Promise<IAPIResponse<OpenWeather>> {
    const request = await openweatherAPI.get(
      `forecast?lat=${lat}&lon=${lon}&units=metric`,
    );

    return request;
  }

  static async getWeatherBitForecast(
    lat: number,
    lon: number,
  ): Promise<IAPIResponse<WeatherBit>> {
    const request = await weatherbitAPI.get(
      `forecast/daily?lat=${lat}&lon=${lon}`,
    );

    return request;
  }
}
