import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <section className="error-section">
            <h1>Oh no! Someone ate all cookies! We`re sorry..</h1>
            <Link to="/">Go to home page for more :)</Link>
        </section>);
}

export default ErrorPage;