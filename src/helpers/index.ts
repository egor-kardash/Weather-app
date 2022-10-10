import {
  GeoLocation,
  GoogleEvent,
  IAPIResponse,
  IGoogleAPIResponse,
  OpenWeather,
  Weather,
  WeatherBit,
} from '@/types';

export const getCurrentDate = () => {
  const date = new Date();

  return date.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

export const getCurrentTime = () => {
  const date = new Date();

  return date
    .toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    })
    .split(' ');
};

export const parseLocationData = (response: IAPIResponse<GeoLocation[]>) => {
  return {
    data: {
      city: response.data?.[0].name as string,
      country: response.data?.[0].country as string,
      longitude: response.data?.[0].lon as number,
      latitude: response.data?.[0].lat as number,
    },
    status: response.status,
    statusText: response.statusText,
  };
};

export const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });

export const getWeekdayShortName = (dateValue?: number | string) => {
  const date = dateValue ? new Date(dateValue) : new Date();

  return date.toLocaleDateString('en-GB', {
    weekday: 'short',
  });
};

export const parseOpenWeatherDataResponse = (
  response: IAPIResponse<OpenWeather>,
) => {
  const weathers: Weather[] = [
    {
      weekday: getWeekdayShortName(),
      temperature: Math.round(response.data?.list[0].main.temp as number),
      condition: getWeatherCondition(
        response.data?.list[0].weather[0].id as number,
      ),
      icon: response.data?.list[0].weather[0].icon as string,
    },
  ];

  const currentDate = new Date().toLocaleDateString('en-CA');

  response.data?.list.forEach((item) => {
    const [date, time] = item.dt_txt.split(' ');

    if (currentDate !== date && time === '12:00:00' && weathers.length < 5) {
      weathers.push({
        weekday: getWeekdayShortName(date),
        temperature: Math.round(item.main.temp),
        condition: getWeatherCondition(item.weather[0].id),
        icon: item.weather[0].icon,
      });
    }
  });

  return {
    status: response.status,
    statusText: response.statusText,
    data: weathers,
  };
};

export const parseGoogleDataResponse = (response: IGoogleAPIResponse) => {
  const events: GoogleEvent[] = [];

  response.result.items.map((item) => {
    events.push({
      summary: item.summary,
      start: {
        dateTime: item.start.dateTime.split('T')[1].slice(0, 5),
      },
    });
  });

  return {
    result: {
      items: events,
    },
    status: response.status,
    statusText: response.statusText,
  };
};

const getWeatherCondition = (code: number) => {
  if (code === 800) return 'clear';

  switch (code.toString()[0]) {
    case '2':
      return 'thunderstorm';
    case '3':
      return 'drizzle';
    case '5':
      return 'rain';
    case '6':
      return 'snow';
    case '7':
      return 'atmosphere';
    case '8':
      return 'clouds';
    default:
      return 'default';
  }
};

export const parseWeatherBitDataResponse = (
  response: IAPIResponse<WeatherBit>,
) => {
  const weathers: Weather[] = [];

  response.data?.data.slice(0, 5).forEach((item) => {
    weathers.push({
      weekday: getWeekdayShortName(item.valid_date),
      temperature: Math.round(item.temp),
      condition: getWeatherCondition(item.weather.code),
      icon: item.weather.icon,
    });
  });

  return {
    status: response.status,
    statusText: response.statusText,
    data: weathers,
  };
};
