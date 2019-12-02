import React from 'react';
import { Link } from "react-router-dom";
import DaysToCmas from '../DaysToCmas';
import './styles.css';

const Navigation = (props) => {
  return (
    <header className="site-header">
      <p className="header-title">
        <DaysToCmas /> Days to Christmas</p>
      <nav>
        <ul>
          <li><Link to='/games'>Games</Link></li>
          <li><Link to='/profile'>Profile</Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/logout'>Logout</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
        </ul>
        <button onClick={props.snowHandler}>Let it Snow!</button>
      </nav>
    </header>
  );
}

export default Navigation;
