import React, { KeyboardEvent, useRef } from 'react';

import { useDispatch } from 'react-redux';

import { loadLocationByCityName } from '@/store/actionCreators';

import { CitySearchInput } from './components';

export const CitySearch = () => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLInputElement>(null);

  const handleEnterKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const searchedCity = ref.current?.value;
    if (e.key === 'Enter' && searchedCity) {
      dispatch(loadLocationByCityName(searchedCity));
      ref.current.value = '';
      ref.current.blur();
    }
  };

  return (
    <CitySearchInput
      ref={ref}
      type='text'
      placeholder='Enter city'
      onKeyDown={handleEnterKeyDown}
    />
  );
};
