import React from 'react';
import { Link } from "react-router-dom";
import './styles.css';

const HomePage = () => {
   
    return (
        <>
            <section className="main-section">
                <h1>Enjoy your favorite Christmas recipes</h1>
                <Link to='/recipes' className="link-button">Recipes</Link>
                <p>If you don't have account <a href="register">singUp</a> for free!</p>
            </section>
        </>
    );
}

export default HomePage;