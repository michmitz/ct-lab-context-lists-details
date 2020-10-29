import { useContext } from 'react';
import { ColorModeContext } from '../context/ColorModeContext';

export const useColorMode = () => {
  const { colorMode, toggle } = useContext(ColorModeContext);
  return { colorMode, toggle };
};