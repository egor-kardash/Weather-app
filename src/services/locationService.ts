import { ipAPI, openweatherGeoAPI } from '@/axios';
import { GeoLocation, IAPIResponse, Location } from '@/types';

export class LocationService {
  static async getCurrentLocation(): Promise<IAPIResponse<Location>> {
    const request = await ipAPI.get('json/');

    return request;
  }

  static async getLocationByCityName(
    city: string,
  ): Promise<IAPIResponse<GeoLocation[]>> {
    const request = await openweatherGeoAPI.get(`direct?q=${city}&limit=1`);

    return request;
  }
}
