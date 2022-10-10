import styled from 'styled-components';

import theme from '@/theme';

export const StyledDailyForecast = styled.div`
  width: ${theme.percentageSizes[15]}%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  color: white;
  padding-top: ${theme.spaces[4]}px;
  padding-bottom: ${theme.spaces[4]}px;
`;

export const WeekDayName = styled.div`
  min-width: ${theme.widths[5]}px;
  text-align: center;
  font-size: ${theme.fontSizes[3]}px;
  background-color: ${theme.colors.darkblue};
  border-radius: ${theme.borderRadius[3]}px;
`;

export const WeatherIcon = styled.img`
  width: ${theme.percentageSizes[15]}%;
  max-width: ${theme.widths[6]}px;
  background-size: contain;
  background-repeat: no-repeat;
  padding-left: ${theme.spaces[1]}px;
  padding-right: ${theme.spaces[1]}px;
`;

export const Temperature = styled.div`
  font-size: ${theme.fontSizes[4]}px; ;
`;
