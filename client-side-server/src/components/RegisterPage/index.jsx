import React from 'react';
import { Form, Field } from 'react-final-form';
import { Link, useHistory } from 'react-router-dom';
import services from '../../services/user-services';
import './styles.css';

const RegisterPage = () => {
    const history = useHistory();

    const onSubmit = (values) => {
        services.register(values)
            .then(() => history.push("/login"))
            .catch(err => console.log(err));
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
                            <Link to="/login">SignIn</Link>
                            <button type="submit" disabled={submitting}>
                                Submit
                            </button>
                            <button
                                type="button"
                                onClick={form.reset}
                                disabled={submitting || pristine} >
                                Reset
                            </button>
                        </div>
                        <pre>{JSON.stringify(values, 0, 2)}</pre>
                    </form>
                )}
            />
        </div>
    );
}

export default RegisterPage;

const handleValidation = values => {

    const errors = {}
    if (!values.username) {
        errors.username = 'required'
    } else if (values.username.length < 4) { errors.username = 'username should be at least 4 chars' }

    if (!values.password) {
        errors.password = 'required'
    } else if (values.username.length < 6) { errors.username = 'username should be at least 6 chars' }

    if (!values.email) {
        errors.email = 'required'
    }

    if (!values.confirm) {
        errors.confirm = 'required'
    } else if (values.confirm !== values.password) {
        errors.confirm = 'Must match'
    }

    return errors
}
