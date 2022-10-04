import { OpenWeatherAPI, WeatherBitAPI } from '@/constants';

export class WeatherService {
  static async getTodaysWeather(city: string): Promise<any> {
    const request = await fetch(
      `${OpenWeatherAPI.BASE_URL}weather?q=${city}&units=metric&appid=${OpenWeatherAPI.API_KEY}`,
      {
        headers: new Headers({
          Accept: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        }),
      },
    );

    return await request.json();
  }

  static async getOpenWeatherForecast(lat: number, lon: number): Promise<any> {
    const request = await fetch(
      `${OpenWeatherAPI.BASE_URL}forecast?lat=${lat}&lon=${lon}&units=metric&appid=${OpenWeatherAPI.API_KEY}`,
      {
        headers: new Headers({
          Accept: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        }),
      },
    );

    return await request.json();
  }

  static async getWeatherBitForecast(lat: number, lon: number): Promise<any> {
    const request = await fetch(
      `${WeatherBitAPI.BASE_URL}forecast/daily?lat=${lat}&lon=${lon}&key=${WeatherBitAPI.API_KEY}`,
      {
        headers: new Headers({
          Accept: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        }),
      },
    );

    return await request.json();
  }
}
