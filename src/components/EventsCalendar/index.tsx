import { useEffect, useState } from 'react';

import { gapi } from 'gapi-script';
import GoogleButton from 'react-google-button';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { v4 as getId } from 'uuid';

import { Event } from '@/components/Event';
import { useAppSelector } from '@/hooks';
import { EVENTS_REQUESTED } from '@/store/actionTypes';
import { GoogleEvent, IState } from '@/types';

import { EventsContainer } from './styled';

export const EventsCalendar = () => {
  const { data }: IState<GoogleEvent[]> = useAppSelector(
    (state) => state.events,
  );
  const dispatch = useDispatch();
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID as string,
      });
    };
    gapi.load('client:auth2', initClient);
  }, []);

  useEffect(() => {
    if (isSignedIn) {
      dispatch({ type: EVENTS_REQUESTED });
    }
  }, [isSignedIn]);

  const onSuccessLogin = () => {
    setTimeout(() => {
      setIsSignedIn(true);
    }, 500);
  };

  return (
    <EventsContainer>
      {!isSignedIn && (
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID as string}
          render={renderProps => (
            <GoogleButton onClick={renderProps.onClick} />
          )}
          onSuccess={onSuccessLogin}
        />
      )}
      {isSignedIn &&
        data?.map((item) => (
          <Event
            key={getId()}
            time={item.start.dateTime}
            summary={item.summary}
          />
        ))}
    </EventsContainer>
  );
};
