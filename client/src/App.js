import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [loaded, setLoaded]  = useState(false)
  const [items, setItems] = useState([])

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

  useEffect(() => {
    if (!loaded){
      init()
    }
  }, [init])

  const renderedItems = items.map(i => {
    return <div key={i._id}>
      <h2>{i.title}</h2>
      <p>{i.message}</p>
    </div>
    
  })

  return (
    <div className="App">
      <header className="App-header">
       {renderedItems}
      </header>
    </div>
  );
}

export default App;
