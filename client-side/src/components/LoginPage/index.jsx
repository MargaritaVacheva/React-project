import React, { useState, useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import { UserContext } from '../App/App';
import services from '../../services/user-services';

const LoginPage = () => {
    const history = useHistory();
    const location = useLocation();
    const [stateErrors, setErrors] = useState(null);
    const { user, setUser } = useContext(UserContext);

    let { from } = location.state || { from: { pathname: "/" } };

    const onSubmit = values => {
        services.login(values)
            .then((data) => {
                setUser(data);
                history.replace(from);
            })
            .catch(err => {
                setErrors({ err });
                setUser(null);
                console.log(err);
                console.log(stateErrors);
            });
    }

    if (!user) {
        return (
            <div className="form-layout">
                <h2>Login</h2>
                <Form
                    onSubmit={onSubmit}
                    validate={handleValidation}
                    render={({ handleSubmit, form, submitting, pristine, values }) => (
                        <form onSubmit={(ev) => { ev.preventDefault(); handleSubmit(); }}>
                            <Field name="username">
                                {({ input, meta }) => (
                                    <div>
                                        <label>Username</label>
                                        <input {...input} type="text" placeholder="Username" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                            <Field name="password">
                                {({ input, meta }) => (
                                    <div>
                                        <label>Password</label>
                                        <input {...input} type="password" placeholder="Password" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                            <div className="buttons">
                                <Link to="/register">Sign Up</Link>
                                <button type="submit" disabled={submitting}>
                                    Login
                                    </button>
                                <button
                                    type="button"
                                    onClick={form.reset}
                                    disabled={submitting || pristine} >
                                    Reset
                                        </button>
                                {stateErrors && (stateErrors.err === 401) && <span>Wrong username or password</span>}
                            </div>
                        </form>
                    )}
                />
            </div>
        )
    } else {
        history.replace(from);
        return null
    }
}

export default LoginPage;

const handleValidation = values => {
    const errors = {}
    if (!values.username) {
        errors.username = 'Required'
    }
    if (!values.password) {
        errors.password = 'Required'
    }
    return errors
}