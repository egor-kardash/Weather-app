import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { TogglerAPI } from '@/components/TogglerAPI';
import { useAppSelector } from '@/hooks';
import { FORECAST_REQUESTED } from '@/store/actionTypes';

import { CityName, CountryName, StyledLocationContainer } from './styled';

export const LocationContainer = () => {
  const { city, country } = useAppSelector((state) => state.location['data']);
  const { currentAPI } = useAppSelector((state) => state.api);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FORECAST_REQUESTED });
  }, [city, currentAPI]);

  return (
    <StyledLocationContainer>
      <TogglerAPI />
      <CityName>{city}</CityName>
      <CountryName>{country}</CountryName>
    </StyledLocationContainer>
  );
};
