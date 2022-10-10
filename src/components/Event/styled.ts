import styled from 'styled-components';

import theme from '@/theme';

export const StyledEvent = styled.div`
  min-height: ${theme.heights[1]}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: ${theme.fontSizes[1]}px;
  gap: ${theme.spaces[5]}px;
`;

export const Time = styled.div`
  width: ${theme.widths[4]}px;
  height: ${theme.percentageSizes[7]}%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.darkblue};
  border-radius: ${theme.borderRadius[4]}px;
  align-items: center;
`;

export const Text = styled.div`
  white-space: nowrap;
  user-select: none;
`;
