import React, {useEffect, useState} from 'react';
import './theme/theme.scss';

import NavigationProvider from "./navigation/NavigationProvider"

import Theme from "./components/Theme/Theme"

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    if(isDarkMode){
      setIsDarkMode(false)
    } else {
      setIsDarkMode(true)
    }
  }

  
  return (
    <Theme isDarkMode={isDarkMode}>
        <NavigationProvider toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
    </Theme>
  );
}

export default App;
