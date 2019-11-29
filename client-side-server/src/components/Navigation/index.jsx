import React from 'react';
import DaysToCmas from '../DaysToCmas';
import './styles.css';

const Navigation = (props) => {
  return (
      <header className="site-header">
        <p className="header-title">
        <DaysToCmas /> Days to Christmas</p>
        <nav>
          <ul>
            <li><a href='/games'>Games</a></li>
            <li><a href='/profile'>Profile</a></li>
            <li><a href='/login'>Login</a></li>
            <li><a href='/logout'>Logout</a></li>
            <li><a href="/contacts">Contacts</a></li>
          </ul>
            <button onClick={props.snowHandler}>Let it Snow!</button>
          
        </nav>
      </header>
  );
}

export default Navigation;
