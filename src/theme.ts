const font = 'Gilroy';

const opacity = [0, 0.25, 0.5, 0.75, 0.85, 1];
const fontSizes = [16, 20, 24, 28, 32, 48, 64, 72];
const percentageSizes = [
  15, 20, 25, 30, 35, 40, 50, 60, 65, 70, 75, 80, 85, 90, 95, 100,
];

const colors = {
  white: '#fff',
  dark: '#000',
  darkblue: '#283144',
  transparentDarkblue: `rgba(48, 56, 73, ${opacity[3]})`,
};

const breakpoints = {
  mobile: 600,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
};

export default {
  colors,
  font,
  fontSizes,
  percentageSizes,
  breakpoints,
  opacity,
  scales: [0.5, 0.6, 0.7, 0.8, 0.85, 0.9, 0.95],
  spaces: [0, 4, 8, 12, 16, 20, 24, 28, 32, 48],
  widths: [
    16, 24, 32, 50, 64, 72, 100, 150, 200, 250, 300, 350, 380, 400, 800, 1200,
  ],
  heights: [25, 40, 50, 75, 100, 125, 150],
  borderRadius: [4, 8, 12, 16, 24],
};
