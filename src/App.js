import React, { useState } from 'react';

import Home from './components/Home';
import SignIn from './components/SignIn';

import './App.css';

function App() {
  const [ isUserLogin , setIsUserLogin ] = useState(false)
  return isUserLogin ? 
   (
    <div className="App">
        <Home/>
    </div>
   )
    :
  (
    <SignIn/>
  )

}

export default App;
