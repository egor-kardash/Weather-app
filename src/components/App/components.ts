import styled from 'styled-components';

import clear from '@/assets/images/Clear.png';
import clouds from '@/assets/images/Clouds.png';
import drizzle from '@/assets/images/Drizzle.png';
import layoutImage from '@/assets/images/Layout.png';
import mist from '@/assets/images/Mist.png';
import rain from '@/assets/images/Rain.png';
import snow from '@/assets/images/Snow.png';
import thunderstorm from '@/assets/images/Thunderstorm.png';

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${layoutImage});
  background-size: cover;
`;

export const Content = styled.div`
  height: 90vh;
  width: 75vw;
  display: flex;
  flex-direction: column;
  background-image: url(${rain});
  background-size: cover;
`;

export const TopCointainer = styled.div`
  flex: 65%;
  display: flex;
  flex-direction: column;
  //justify-content: space-around;
  padding: 30px 0 0 0;
  color: white;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px 0 0 0;
  color: white;
`

export const BottomContainer = styled.div`
  flex: 35%;
  display: flex;
  flex-direction: row;
  /* opacity: 0.85;
  background-color: #303849; */
  background-color: rgb(48, 56, 73, 0.85);
`;
