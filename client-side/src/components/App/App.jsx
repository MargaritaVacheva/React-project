import React, { useState, useMemo, createContext, useContext } from 'react';
import { BrowserRouter, Route, Switch, Redirect, useLocation } from "react-router-dom";
import ErrorBoundary from '../ErrorBoundary';
import Auth from '../Auth';
import Snow from '../Snow';
import Navigation from '../Navigation';
import HomePage from '../HomePage';
import Recipes from '../Recipes';
import PostRecipe from '../PostRecipe';
import EditRecipe from '../EditRecipe';
import DeleteRecipe from '../DeleteRecipe';
import DetailsRecipe from '../DetailsRecipe';
import RegisterPage from '../RegisterPage';
import LoginPage from '../LoginPage';
import Logout from '../Logout';
import ProfilePage from '../ProfilePage';
import EditProfile from '../EditProfile';
import ContactPage from '../ContactPage';
import ErrorPage from '../ErrorPage';
import Main from '../Main';
import Footer from '../Footer';
import './App.css';

export const UserContext = createContext(null);

const App = () => {
  const [isSnowing, setIsSnow] = useState(false);
  const [user, setUser] = useState(null);

  const userValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  const snowHandler = () => {
    isSnowing ?
      setIsSnow(false) :
      setIsSnow(true);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={userValue}>
          <Auth>
            <ErrorBoundary>
              <Snow isSnowing={isSnowing} />
            </ErrorBoundary>
            <ErrorBoundary>
              <Navigation snowHandler={snowHandler} />
            </ErrorBoundary>
            <ErrorBoundary>
              <Main>
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/login" component={LoginPage} />
                  <Route path="/register" component={RegisterPage} />
                  <Route path="/contacts" component={ContactPage} />
                  <RouteAuthWrapper exact path="/recipes" component={Recipes} />
                  <RouteAuthWrapper path="/details/:id" component={DetailsRecipe} />
                  <RouteAuthWrapper path="/editRecipe/:id" component={EditRecipe} />
                  <RouteAuthWrapper path="/deleteRecipe/:id" component={DeleteRecipe} />
                  <RouteAuthWrapper path="/postRecipe" component={PostRecipe} />
                  <RouteAuthWrapper path="/profile" component={ProfilePage} />
                  <RouteAuthWrapper path="/editProfie" component={EditProfile} />
                  <RouteAuthWrapper path="/logout" component={Logout} />
                  <Route path="*" component={ErrorPage} />
                </Switch>
              </Main>
            </ErrorBoundary>
            <ErrorBoundary>
              <Footer />
            </ErrorBoundary>
          </Auth>
        </UserContext.Provider>
      </BrowserRouter >
    </div >
  );
}

export default App;


export const RouteAuthWrapper = ({ component: Component, ...routeProps }) => {
  const { user } = useContext(UserContext);
  let location = useLocation();
  return (
    <Route
      {...routeProps}
      render={() => (user ?
        <Component /> :
        <Redirect to={{
          pathname: "/login",
          state: { from: location }
        }} />)
      }
    />
  );
};
