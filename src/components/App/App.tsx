import React from 'react';

import { CitySearch } from '../CitySearch';
import { DateContainer } from '../DateContainer';
import { Forecast } from '../Forecast';
import { LocationContainer } from '../LocationContainer';
import {
  BottomContainer,
  Content,
  Layout,
  TopCointainer,
  Wrapper,
} from './components';

export const App = () => {
  return (
    <Layout>
      <Content>
        <TopCointainer>
          <CitySearch />
          <Wrapper>
            <DateContainer />
            <LocationContainer />
          </Wrapper>
        </TopCointainer>
        <BottomContainer>
          <Forecast />
        </BottomContainer>
      </Content>
    </Layout>
  );
};
