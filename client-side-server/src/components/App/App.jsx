import React, { useState } from 'react';
import Snow from '../Snow';
import Navigation from '../Navigation/index';
// import Aside from '../Aside';
import Main from '../Main';
import Footer from '../Footer';
import './App.css';

const App = () => {
  const[ isSnowing, setIsSnow] = useState(true);

  const snowHandler = (ev) => {
   isSnowing ?
    setIsSnow(false) :
    setIsSnow(true); 
  }

  return (
    <div className="App">
      <Snow isSnowing={isSnowing}/>
      <Navigation snowHandler={snowHandler}/>
      <Main />
      {/* <Aside/>  */}
      <Footer /> 
    </div>
  );
}

export default App;
