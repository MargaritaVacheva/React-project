import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import DaysToCmas from '../DaysToCmas';
import { UserContext } from '../App/App';
import defaultImage from '../../photos/chuttersnap-lCf-8i0pKYc-unsplash.jpg';
import './styles.css';

const Navigation = (props) => {
  const { user } = useContext(UserContext);

  return (
    <header className="site-header">
      <Link to="/" className="header-title">
        <DaysToCmas /> Days to Christmas</Link>
      <button onClick={props.snowHandler}>Let it Snow!</button>
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
          <li><Link to="/postRecipe">Add Recipe</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
        </ul>
        {
          user ?
          <span className="profile-link">            
            <Link to='/profile'>
              <img src={user.imageUrl || defaultImage}
                alt="profile"
                className="profile-image"></img>
              <span>Welcome, {user.username}!</span>
            </Link>
            </span>
            :
            ""
        }
      </nav>
    </header>
  );
}

export default Navigation;
