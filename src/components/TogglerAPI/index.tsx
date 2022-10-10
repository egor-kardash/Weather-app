import { ChangeEvent } from 'react';

import { CustomRadioButton } from '@/components/CustomRadioButton';
import { API } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { setAPI } from '@/store/actionCreators';

import { TogglerContainer } from './styled';

export const TogglerAPI = () => {
  const { currentAPI } = useAppSelector((state) => state.api);
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setAPI(e.target.value));
  };

  return (
    <TogglerContainer>
      <CustomRadioButton
        value={API.OpenWeather}
        label={API.OpenWeather}
        isChecked={currentAPI === API.OpenWeather}
        handleChange={handleChange}
      />
      <CustomRadioButton
        value={API.WeatherBit}
        label={API.WeatherBit}
        isChecked={currentAPI === API.WeatherBit}
        handleChange={handleChange}
      />
    </TogglerContainer>
  );
};
