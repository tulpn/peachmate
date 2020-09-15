import React, {useEffect, useState} from 'react';
import './theme/theme.scss';

import Theme from "./components/Theme/Theme"
import Sidebar from "./components/Sidebar/Sidebar"

function App() {

  const [loaded, setLoaded]  = useState(false)
  const [items, setItems] = useState([])

  const [isDarkMode, setIsDarkMode] = useState(false)

  const init = async () => {
    setLoaded(true)
    const res = await fetch("http://localhost:8888/")
    const body = await res.json()

    if ( res.status !== 200){
      setItems([])
    } else {
      setItems(body.items)
    }
  }

  const toggleTheme = () => {
    if(isDarkMode){
      setIsDarkMode(false)
    } else {
      setIsDarkMode(true)
    }
  }

  useEffect(() => {
    if (!loaded){
      init()
    }
  })

  const renderedItems = items.map(i => {
    return <div key={i._id}>
      <h2><a href="#">{i.title}</a></h2>
      <p>{i.message}</p>
    </div>
    
  })
  
  return (
    <Theme isDarkMode={isDarkMode}>
        <div className="appCnt fullHeight">
          <div className="sidebarCnt fullHeight">
            <Sidebar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          </div>
          <div className="contentCnt fullHeight">
            <header className="App-header">
            {renderedItems}
            </header>
          </div>
        </div>
    </Theme>
  );
}

export default App;
