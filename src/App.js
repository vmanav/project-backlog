import React from 'react';
import './App.css';
import DrawerComponent from './components/DrawerComponent';
import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <div className="Main">
          <DrawerComponent />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
