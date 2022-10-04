import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { useAppSelector } from '@/hooks';
import { FORECAST_REQUESTED } from '@/store/actionTypes';

import { TogglerAPI } from '../TogglerAPI';
import { CityName, CountryName, StyledLocationContainer } from './components';

export const LocationContainer = () => {
  const { city, country } = useAppSelector((state) => state.location);
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
