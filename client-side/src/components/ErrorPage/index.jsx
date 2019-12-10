import React from 'react';
import { Link } from 'react-router-dom';
import background from '../../photos/angelina-jollivet-SeCt2NnTecM-unsplash.jpg';

const ErrorPage = () => {
    return (
        <section className="error-section" style={{backgroundImage: `url(${background})`}}>
            {/* <img src={background} alt="error" /> */}
            <h1>Oh no! Someone ate all cookies!</h1>
            <h2> 404. We`re sorry...</h2>
            <Link to="/">Go to home page for more :)</Link>
        </section>);
}

export default ErrorPage;