import { v4 as getId } from 'uuid';

import { DailyForecast } from '@/components/DailyForecast';
import { useAppSelector } from '@/hooks';
import { IState, Weather } from '@/types';

export const Forecast = () => {
  const { data, isLoading }: IState<Weather[]> = useAppSelector(
    (state) => state.weather,
  );

  return (
    <>
      {isLoading &&
        data?.map((item: Weather) => <DailyForecast key={getId()} {...item} />)}
    </>
  );
};
