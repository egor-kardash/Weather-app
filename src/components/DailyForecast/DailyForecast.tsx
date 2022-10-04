import React from 'react';

import { API } from '@/constants';
import { useAppSelector } from '@/hooks';
import { IWeather } from '@/interfaces';

import {
  StyledDailyForecast,
  Temperature,
  WeatherIcon,
  WeekDayName,
} from './components';

export const DailyForecast = (data: IWeather) => {
  const { currentAPI } = useAppSelector((state) => state.api);

  const iconPath =
    currentAPI === API.OpenWeather
      ? `https://openweathermap.org/img/wn/${data.icon}@2x.png`
      : `https://www.weatherbit.io/static/img/icons/${data.icon}.png`;

  return (
    <StyledDailyForecast>
      <WeekDayName>{data.weekday}</WeekDayName>
      <WeatherIcon
        src={iconPath}
      />
      <Temperature>{data.temperature}°</Temperature>
    </StyledDailyForecast>
  );
};
