import { useEffect, useState } from 'react';

import GoogleButton from 'react-google-button';
import { useDispatch } from 'react-redux';
import { v4 as getId } from 'uuid';

import { Event } from '@/components/Event';
import { useAppSelector } from '@/hooks';
import { EVENTS_REQUESTED } from '@/store/actionTypes';
import { GoogleEvent, IState } from '@/types';
import { apiCalendar } from '@/utils';

import { EventsContainer } from './styled';

export const EventsCalendar = () => {
  const { data }: IState<GoogleEvent[]> = useAppSelector(
    (state) => state.events,
  );
  const dispatch = useDispatch();
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  useEffect(() => {
    dispatch({ type: EVENTS_REQUESTED });
  }, [isSignedIn]);

  const handleClick = () => {
    if (!isSignedIn) {
      apiCalendar.handleAuthClick();
      setTimeout(() => {
        setIsSignedIn(true);
      }, 7000);
    }
  };

  return (
    <EventsContainer>
      {!isSignedIn && <GoogleButton onClick={handleClick} />}
      {data?.map((item) => (
        <Event
          key={getId()}
          time={item.start.dateTime}
          summary={item.summary}
        />
      ))}
    </EventsContainer>
  );
};
