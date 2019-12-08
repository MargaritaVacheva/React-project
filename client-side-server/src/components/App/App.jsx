import React, { useState, useMemo, createContext, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Snow from '../Snow';
import Navigation from '../Navigation';
import HomePage from '../HomePage';
import Recipes from '../Recipes';
import RegisterPage from '../RegisterPage';
import LoginPage from '../LoginPage';
import Logout from '../Logout';
import ProfilePage from '../ProfilePage';
import ContactPage from '../ContactPage';
// import Aside from '../Aside';
import Main from '../Main';
import Footer from '../Footer';
import Auth from '../Auth';
import './App.css';
import imageDefault from '../../photos/joanna-kosinska-llLttk4TgT4-unsplash.jpg';

export const AuthContext = createContext(null);
export const UserContext = createContext(null);

const App = () => {
  const [isSnowing, setIsSnow] = useState(false);
  const [background, setBackground] = useState("");
  const [imageUrl, setImageUrl] = useState(imageDefault);

  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);

  const userValue = useMemo(() => ({ user, setUser }), [user, setUser]);
  const authValue = useMemo(() => ({ auth, setAuth }), [auth, setAuth]);

  // useEffect(() => {
  //   setAuth(6);
  // }, [])

  const snowHandler = (ev) => {
    isSnowing ?
      setIsSnow(false) :
      setIsSnow(true);
  }

  let style = imageUrl ?
    { backgroundImage: `url(${imageUrl})` } :
    { background }


  return (
    <div className="App" style={style}>
      <BrowserRouter>
        <UserContext.Provider value={userValue}>
          <AuthContext.Provider value={authValue}>
            <Auth>
              {/* <Snow isSnowing={isSnowing} /> */}
              <Navigation snowHandler={snowHandler} />
              <Main>
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/login" component={LoginPage} />
                  <Route path="/logout" component={Logout} />
                  <Route path="/register" component={RegisterPage} />
                  <Route path="/recipes" component={Recipes} />
                  <Route path="/profile" component={ProfilePage} />
                  <Route path="/contacts" component={ContactPage} />
                </Switch>
              </Main>
              <Footer />
            </Auth>
          </AuthContext.Provider>
        </UserContext.Provider>
      </BrowserRouter >
    </div >
  );
}

export default App;

//authRoutWrapper
// export default ({ render, ...routeProps }) => {
//   const { authenticated } = useContext(RootContext);
//   return (
//     <Route
//       {...routeProps}
//       render={() => (authenticated ? 
//         render() : 
//         <Redirect to='/login' />)
//       }
//     />
//   );
// };
