import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Snow from '../Snow';
import Navigation from '../Navigation';
import HomePage from '../HomePage';
import Games from '../Games';
import RegisterPage from '../RegisterPage';
import LoginPage from '../LoginPage';
import ProfilePage from '../ProfilePage';
import ContactPage from '../ContactPage';
// import Aside from '../Aside';
import Main from '../Main';
import Footer from '../Footer';
import './App.css';

const App = () => {
  const [isSnowing, setIsSnow] = useState(false);
  const [background, setBackground] = useState("green");
  const [imageUrl, setImageUrl] = useState("");

  const snowHandler = (ev) => {
    isSnowing ?
      setIsSnow(false) :
      setIsSnow(true);
  }

  let style =  imageUrl ? 
  { backgroundImage: `url(${imageUrl})`} :
  { background } 
  

  return (
    <div className="App" style={style}>
      <BrowserRouter>
        <Snow isSnowing={isSnowing} />
        <Navigation snowHandler={snowHandler} />
        <Main>
          <Switch>
            <Route exact path="/" >
              <HomePage setImageUrl={setImageUrl} />
            </Route>
            <Route exact path="/register" >
              <RegisterPage setImageUrl={setImageUrl} />
            </Route>
            <Route exact path="/login" >
              <LoginPage setImageUrl={setImageUrl} />
            </Route>
            <Route path="/games" component={Games} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/contacts" component={ContactPage} />
          </Switch>
        </Main>
        {/* <Aside/>  */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
