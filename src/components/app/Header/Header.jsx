import React from 'react';
import { useColorMode } from '../../../hooks/colormode';
import theme from '../ColorMode/ColorMode.css';

const Header = () => {
  const { toggle } = useColorMode();

  return (
    <header className={theme.dark} padding-top="20px">
      <button data-testid="button" onClick={toggle}>Toggle Light or Dark Mode</button>
    </header>
  );
};
export default Header;