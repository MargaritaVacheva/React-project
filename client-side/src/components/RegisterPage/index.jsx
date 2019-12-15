import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { Link, useHistory } from 'react-router-dom';
import services from '../../services/user-services';
import './styles.css';

const RegisterPage = () => {
    const history = useHistory();
    const [stateErrors, setErrors] = useState(null);


    const onSubmit = (values) => {
        services.register(values)
            .then(() => history.push("/login"))
            .catch((err) => {
                setErrors({ err });
                console.log(err);
                console.log(stateErrors);
            });
    }

    return (
        <div className="form-layout">
            <h2>Register! It`s free :)</h2>
            <Form
                onSubmit={onSubmit}
                validate={handleValidation}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                        <Field name="username">
                            {({ input, meta }) => (
                                <>
                                    <div>
                                        <label>Username</label>
                                        <input {...input} type="text" placeholder="Username" />
                                    </div>
                                    <p>* {meta.error && meta.touched && <span>{meta.error}</span>}</p>
                                </>
                            )}
                        </Field>
                        <Field name="email">
                            {({ input, meta }) => (
                                <>
                                    <div>
                                        <label>Email</label>
                                        <input {...input} type="email" placeholder="E-mail" />
                                    </div>
                                    <p>* {meta.error && meta.touched && <span>{meta.error}</span>}</p>
                                </>
                            )}
                        </Field>
                        <Field name="password">
                            {({ input, meta }) => (
                                <>
                                    <div>
                                        <label>Password</label>
                                        <input {...input} type="password" placeholder="Password" />
                                    </div>
                                    <p>* {meta.error && meta.touched && <span>{meta.error}</span>}</p>
                                </>
                            )}
                        </Field>
                        <Field name="confirm">
                            {({ input, meta }) => (
                                <>
                                    <div>
                                        <label>Confirm</label>
                                        <input {...input} type="password" placeholder="Confirm" />
                                    </div>
                                    <p>* {meta.error && meta.touched && <span>{meta.error}</span>}</p>
                                </>
                            )}
                        </Field>
                        <div className="buttons">
                            <Link to="/login">Sign In</Link>
                            <button type="submit" disabled={submitting}>
                                Register
                            </button>
                            <button
                                type="button"
                                onClick={form.reset}
                                disabled={submitting || pristine} >
                                Reset
                            </button>
                            {stateErrors && (stateErrors.err === 500) && <span>Username may already been taken</span>}
                        </div>
                    </form>
                )}
            />
        </div>
    );
}

export default RegisterPage;

const handleValidation = values => {

    const emailPattern = /^[A-Za-z0-9_.]+@[A-Za-z0-9_.]{2,}\.[A-Za-z]{2,4}$/gm;
    const errors = {}
    if (!values.username) {
        errors.username = 'required';
    } else if (values.username.length < 4) {
        errors.username = 'username should be at least 4 chars';
    }

    if (!values.password) {
        errors.password = 'required';
    } else if (values.password.length < 6) {
        errors.password = 'password should be at least 6 chars';
    }

    if (!values.email) {
        errors.email = 'required';
    } else if (!values.email.match(emailPattern)) {
        errors.email = 'not a valid email';
    }

    if (!values.confirm) {
        errors.confirm = 'required';
    } else if (values.confirm !== values.password) {
        errors.confirm = 'password must match';
    }

    return errors
}
