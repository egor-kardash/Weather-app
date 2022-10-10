import styled from 'styled-components';

import theme from '@/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  white-space: nowrap;
  user-select: none;

  @media (max-width: ${theme.breakpoints.mobile}px) {
    align-items: center;
  }
`;

export const TimeContainer = styled.div``;

export const Time = styled.span`
  font-size: calc(32px + 3vw);
`;

export const Label = styled.span`
  font-size: calc(12px + 0.7vw);
`;

export const CurrentDate = styled.div`
  font-size: ${theme.fontSizes[2]}px;
  font-size: calc(18px + 0.6vw);
`;
