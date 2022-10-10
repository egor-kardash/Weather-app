import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import { getCurrentDate, getCurrentTime } from '@/helpers';
import { CURRENT_LOCATION_REQUESTED } from '@/store/actionTypes';

import { CurrentDate, Label, Time, TimeContainer, Wrapper } from './styled';

export const DateContainer = () => {
  const [currentDate] = useState(getCurrentDate);
  const [currentTime, setCurrentTime] = useState(getCurrentTime);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: CURRENT_LOCATION_REQUESTED });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);
    return () => clearInterval(timer);
  }, [setCurrentTime]);

  return (
    <Wrapper>
      <TimeContainer>
        <Time>{currentTime[0]}</Time>
        <Label>{currentTime[1]}</Label>
      </TimeContainer>
      <CurrentDate>{currentDate}</CurrentDate>
    </Wrapper>
  );
};
