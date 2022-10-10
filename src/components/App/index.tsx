import { CitySearch } from '@/components/CitySearch';
import { DateContainer } from '@/components/DateContainer';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { EventsCalendar } from '@/components/EventsCalendar';
import { Forecast } from '@/components/Forecast';
import { LocationContainer } from '@/components/LocationContainer';
import { useAppSelector } from '@/hooks';

import {
  BottomContainer,
  Content,
  Layout,
  TopCointainer,
  Wrapper,
} from './styled';

export const App = () => {
  const condition = useAppSelector(
    (state) => state.weather.data?.[0]?.condition,
  );

  return (
    <Layout>
      <Content condition={condition}>
        <TopCointainer>
          <ErrorBoundary>
            <CitySearch />
            <Wrapper>
              <DateContainer />
              <LocationContainer />
            </Wrapper>
            <EventsCalendar />
          </ErrorBoundary>
        </TopCointainer>
        <BottomContainer>
          <ErrorBoundary>
            <Forecast />
          </ErrorBoundary>
        </BottomContainer>
      </Content>
    </Layout>
  );
};
