export type GeoLocation = {
  name: string;
  country: string;
  lon: number;
  lat: number;
};

export type Weather = {
  weekday: string;
  temperature: number;
  condition: string;
  icon: string;
};

export type Location = {
  city: string;
  country: string;
  latitude: number;
  longitude: number;
};

export type WeatherBit = {
  data: IWeatherBitData[];
};

export type OpenWeather = {
  list: IOpenWeatherData[];
};

export type EventProps = {
  time: string;
  summary: string;
};

export interface IState<T> {
  data?: T;
  isLoading: boolean;
  status: number;
  statusText: string;
}

export interface IOpenWeatherData {
  dt_txt: string;
  main: {
    temp: number;
  };
  weather: [
    {
      id: number;
      main: string;
      icon: string;
    },
  ];
}

export interface IWeatherBitData {
  valid_date: string;
  temp: number;
  weather: {
    code: number;
    icon: string;
  };
}

export type GoogleEvent = {
  summary: string;
  start: {
    dateTime: string;
  };
};

export interface IGoogleAPIResponse {
  result: {
    items: GoogleEvent[];
  };
  status: number;
  statusText?: string;
}

export interface IAPIResponse<T> {
  status: number;
  statusText: string;
  data?: T;
}

export interface IAPI {
  currentAPI: string;
}
