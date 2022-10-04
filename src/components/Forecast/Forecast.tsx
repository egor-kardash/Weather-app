import React from 'react';

import { v4 as getId } from 'uuid';

import { useAppSelector } from '@/hooks';
import { IWeather, IWeatherState } from '@/interfaces';
import { RootState } from '@/store';

import { DailyForecast } from '../DailyForecast';



export const Forecast = () => {
  const { data, isLoading }: IWeatherState = useAppSelector(
    (state: RootState) => state.weather,
  );

  return (
    <>
      {isLoading &&
        data.map((item: IWeather) => <DailyForecast key={getId()} {...item} />)}
    </>
  );
};
