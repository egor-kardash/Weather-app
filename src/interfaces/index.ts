export interface ILocation {
  city: string;
  country: string;
  latitude: number;
  longitude: number;
}

export interface IParsedLocation {
  city?: string;
  country: string;
  name?: string;
  longitude?: number;
  latitude?: number;
  lon?: number;
  lat?: number;
}

export interface IWeatherState {
  data: IWeather[];
  isLoading: boolean;
}

export interface IWeather {
  weekday: string;
  temperature: number;
  description?: string;
  icon: string;
}

export interface IParsedOpenWeatherData {
  dt: number;
  main: {
    temp: number;
  };
  weather: [
    {
      main: string;
      icon: string;
    },
  ];
}

export interface IParsedWeatherBitData {
  ts: number,
  temp: number,
  weather: {
    icon: string,
  }
}

export interface IOpenWeatherAPIResponce {
  list: IParsedOpenWeatherData[];
}

export interface IWeatherBitAPIResponce {
  data: IParsedWeatherBitData[]
}

export interface IAPI {
  currentAPI: string;
}