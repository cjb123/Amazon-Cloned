import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom'

import Home from './components/Home';
import SignIn from './components/SignIn';

import {getLoginPath ,getLandingPath} from './utils/paths'

import './App.css';

const App = () => {
  const [ isUserLogin , setIsUserLogin ] = useState(true)
  return isUserLogin ? 
   (
    <div className="App">
      <Route path={getLandingPath()} component={Home} exact/>
        {/* <Home/> */}
    </div>
   )
    :
  (<>
    <Route path={getLoginPath()} component={SignIn} exact/>
    {/* <SignIn/> */}
  </>
  )

}

export default App;
