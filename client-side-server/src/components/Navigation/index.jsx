import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import DaysToCmas from '../DaysToCmas';
import { UserContext } from '../App/App'
import './styles.css';

const Navigation = (props) => {
  const { user } = useContext(UserContext);
  console.log(`${user}`, ' - user from Nav');

  return (
    <header className="site-header">
      <Link to="/" className="header-title">
        <DaysToCmas /> Days to Christmas</Link>
      <nav>
        <ul>
          {
            user ?
              <>
                <li><Link to='/recipes'>Recipes</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link to='/logout'>Logout</Link></li>
              </>
              :
              <>
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/login'>Login</Link></li>
              </>
          }
          <li><Link to="/contacts">Contacts</Link></li>
        </ul>
        <button onClick={props.snowHandler}>Let it Snow!</button>
      </nav>
    </header>
  );
}

export default Navigation;
