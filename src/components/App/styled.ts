import styled from 'styled-components';

import theme from '@/theme';

export const Layout = styled.div`
  width: ${theme.percentageSizes[15]}%;
  height: ${theme.percentageSizes[15]}%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${process.env.PUBLIC_URL}/images/layout.png);
  background-size: cover;
`;

export const Content = styled.div<{ condition?: string }>`
  height: ${theme.percentageSizes[13]}%;
  width: ${theme.percentageSizes[13]}%;
  max-width: ${theme.widths[15]}px;
  display: flex;
  flex-direction: column;
  background-image: ${({ condition }) =>
    `url(${process.env.PUBLIC_URL}/images/${condition}.png)`};
  background-size: cover;
  border-radius: ${theme.borderRadius[4]}px;
`;

export const TopCointainer = styled.div`
  flex: ${theme.percentageSizes[8]}%;
  display: flex;
  flex-direction: column;
  padding-top: ${theme.spaces[6]}px;
  color: white;
`;

export const Wrapper = styled.div`
  width: ${theme.percentageSizes[15]}%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${theme.spaces[5]}px;
  padding-left: ${theme.spaces[2]}vw;
  padding-right: ${theme.spaces[2]}vw;
  color: white;

  @media (max-width: ${theme.breakpoints.mobile}px) {
    flex-direction: column;
    align-items: center;
    height: ${theme.percentageSizes[7]}%;
  }
`;

export const BottomContainer = styled.div`
  flex: ${theme.percentageSizes[2]}%;
  display: flex;
  flex-direction: row;
  background-color: ${theme.colors.transparentDarkblue};
  border-radius: 0 0 ${theme.borderRadius[4]}px ${theme.borderRadius[4]}px;
`;
