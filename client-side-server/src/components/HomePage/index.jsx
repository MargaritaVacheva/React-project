import React from 'react';
import './styles.css';

const HomePage = () => {
   
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