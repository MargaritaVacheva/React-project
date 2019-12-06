import React from 'react';
import background from '../../photos/jeshoots-com-7VOyZ0-iO0o-unsplash.jpg';
import './styles.css';

const HomePage = ({ setImageUrl }) => {
  
    setImageUrl(background);
   
    return (
        <>
            <section className="main-section">
                <h1>Enjoy your favorite Christmas ...</h1>
                <button>Play</button>
                <p>If you don't have account <a href="register">singUp</a> for free!</p>
            </section>
        </>
    );
}

export default HomePage;