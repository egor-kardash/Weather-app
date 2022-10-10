import styled from 'styled-components';

import theme from '@/theme';

export const EventsContainer = styled.div`
  width: ${theme.percentageSizes[15]}%;
  padding-top: ${theme.spaces[3]}px;
  padding-left: ${theme.spaces[2]}vw;
  display: flex;
  flex-direction: column;

  @media (max-width: ${theme.breakpoints.mobile}px) {
    align-items: center;
    padding-left: 0;
  }
`;
