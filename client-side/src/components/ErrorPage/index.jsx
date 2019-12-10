import React from 'react';
import { Link } from 'react-router-dom';
import background from '../../photos/angelina-jollivet-SeCt2NnTecM-unsplash.jpg';

const ErrorPage = () => {
    return (
        <section className="error-section" style={{backgroundImage: background}}>
            <h1>Oh no! Someone ate all cookies! We`re sorry..</h1>
            <Link to="/">Go to home page for more :)</Link>
        </section>);
}

export default ErrorPage;