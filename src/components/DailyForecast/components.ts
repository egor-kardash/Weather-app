import styled from 'styled-components';

export const StyledDailyForecast = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  color: white;
  padding: 15px 0 15px 0;
`;

export const WeekDayName = styled.div`
  width: 70px;
  height: 35px;
  text-align: center;
  font-size: xx-large;
  background-color: #283144;
  border-radius: 1.5rem;
`;

export const WeatherIcon = styled.img`
  flex: 30%;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Temperature = styled.div`
  font-size: xx-large;
`;
