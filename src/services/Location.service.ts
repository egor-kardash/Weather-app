import { IpAPI, OpenWeatherAPI } from '@/constants';
import { ILocation } from '@/interfaces';

export class LocationService {
  static async getCurrentLocation(): Promise<ILocation> {
    const request = await fetch(IpAPI.BASE_URL);
    return await request.json();
  }

  static async getLocationByCityName(city: string): Promise<ILocation> {
    const request = await fetch(
      `${OpenWeatherAPI.GEO_URL}direct?q=${city}&limit=1&appid=${OpenWeatherAPI.API_KEY}`,
    );
    return await request.json();
  }
}
