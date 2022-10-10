import styled from 'styled-components';

import theme from '@/theme';

export const StyledLocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  white-space: nowrap;
  user-select: none;

  @media (max-width: ${theme.breakpoints.mobile}px) {
    align-items: center;
  }
`;

export const CityName = styled.div`
  font-size: calc(32px + 2.5vw);
`;

export const CountryName = styled.div`
  font-size: ${theme.fontSizes[1]}px;
`;
