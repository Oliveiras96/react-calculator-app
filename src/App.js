import { useState } from 'react';
import Display from './Containers/Display';
import Header from './Containers/Header';
import Keyboard from './Containers/Keyboard';
import DisplayContext from './Contexts/DisplayContext';

import './App.css';

function App() {

  // const DisplayContext = useContext(DisplayContext);
  const displayValue = useState('');


  return (
    <div className="App">
      <Header />
      <DisplayContext.Provider value={displayValue}>
        <Display />
        <Keyboard />
      </DisplayContext.Provider>
    </div>
  );
}

export default App;
