import { FC, memo } from 'react';

import { EventProps } from '@/types';

import { StyledEvent, Text, Time } from './styled';

export const Event: FC<EventProps> = memo(({ time, summary }) => (
  <StyledEvent>
    <Time>{time}</Time>
    <Text>{summary}</Text>
  </StyledEvent>
));
