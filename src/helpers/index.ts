import { IParsedLocation, IParsedOpenWeatherData, IParsedWeatherBitData, IWeather } from '@/interfaces';

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

const renameKeys = (pattern: any, object: any) => {
  return Object.keys(object).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [pattern[key] || key]: object[key] },
    }),
    {},
  );
};

export const parseLocationData = (data: IParsedLocation) => {
  const pattern = { name: 'city', lat: 'latitude', lon: 'longitude' };

  return renameKeys(pattern, data);
};

export const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });

const getDateByTime = (miliseconds: number) => {
  const date = new Date(miliseconds);

  const day = date.toLocaleDateString('en-SU', {
    day: 'numeric',
    month: 'long',
  });

  const time = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return { day, time };
};

export const getWeekdayShortNameByTime = (miliseconds: number) => {
  const date = new Date(miliseconds);

  return date.toLocaleDateString('en-GB', {
    weekday: 'short',
  });
};

export const parseOpenWeatherDataResponse = (data: IParsedOpenWeatherData[]) => {
  const weathers: IWeather[] = [];

  const currentDay = new Date().toLocaleDateString('en-SU', {
    day: 'numeric',
    month: 'long',
  });

  data.forEach((item) => {
    const { day, time } = getDateByTime(item.dt * 1000);

    if (time === '12:00 PM') {
      weathers.push({
        weekday: getWeekdayShortNameByTime(item.dt * 1000),
        temperature: Math.round(item.main.temp),
        description: item.weather[0].main,
        icon: item.weather[0].icon,
      });
    }
  });

  return weathers;
};

export const parseWeatherBitDataResponse = (data: IParsedWeatherBitData[]) => {
  const weathers: IWeather[] = [];

  data.slice(0, 5).forEach((item) => {
    weathers.push({
      weekday: getWeekdayShortNameByTime(item.ts * 1000),
      temperature: Math.round(item.temp),
      icon: item.weather.icon,
    });
  });

  return weathers;
}
