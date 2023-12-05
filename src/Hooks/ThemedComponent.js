import React, { useContext } from 'react';

const ThemeContext = React.createContext('light');

const ThemedComponent = () => {
  const theme = useContext(ThemeContext);

  return <p>Current Theme: {theme}</p>;
};

export default ThemedComponent;
