import React, { useState } from 'react';

import Topnav from '../Tobnav';
import LandingPage from '../LandingPage';
import './Home.scss';

const Home = () => {
  const [openHeaderMenu, setOpenHeaderMenu] = useState(false)

  const handleOpenHeaderMenu = () => {
    setOpenHeaderMenu(!openHeaderMenu)
  }
  return (
    <div className="app-content">
        <Topnav handleOpenHeaderMenu={handleOpenHeaderMenu}/>
        <LandingPage openHeaderMenu={openHeaderMenu}/>
    </div>
  );
}

export default Home;
