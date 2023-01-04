import { random } from 'lodash';

const colours = [
  '#b91c1c',
  '#15803d',
  '#1d4ed8',
  '#4338ca',
  '#7e22ce',
  '#be185d'
];
export const generateRandomColour = () => colours[random(0, 5)];
