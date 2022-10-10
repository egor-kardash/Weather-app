import styled from 'styled-components';

import theme from '@/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Radio = styled.input`
  cursor: pointer;
`;

export const Label = styled.div`
  font-size: ${theme.fontSizes[1]}px;
`;
