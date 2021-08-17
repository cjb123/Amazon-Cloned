import React, { useState } from 'react';

import Topnav from './components/Tobnav';
import LandingPage from './components/LandingPage';
import Toptabs from './components/toptabs';
import './App.css';

function App() {
  const [openHeaderMenu, setOpenHeaderMenu] = useState(false)

  const handleOpenHeaderMenu = () => {
    setOpenHeaderMenu(!openHeaderMenu)
  }
  return (
    <div className="App">
        <Topnav handleOpenHeaderMenu={handleOpenHeaderMenu}/>
        <LandingPage openHeaderMenu={openHeaderMenu}/>
    </div>
  );
}

export default App;
