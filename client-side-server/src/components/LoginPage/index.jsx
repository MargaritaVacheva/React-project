import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import { UserContext } from '../App/App';
import services from '../../services/user-services';

const LoginPage = () => {
    const history = useHistory();
    const [stateErrors, setErrors] = useState(null);
    const { setUser } = useContext(UserContext);

    const onSubmit = values => {
        console.log(stateErrors);
        services.login(values)
            .then((data) => {
                console.log(data, 'data');
                setUser(data);
                history.push("/");
            })
            .catch(err => {
                setErrors({ err }); 
                console.log(err);
                console.log(stateErrors);   
            });
    }

    //To Do stateErrors

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
                                    <input {...input} type="text" placeholder="Username"/>
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
                            <Link to="/register">SignUp</Link>
                            <button type="submit" disabled={submitting}>
                                Submit
                    </button>
                            <button
                                type="button"
                                onClick={form.reset}
                                disabled={submitting || pristine} >
                                Reset
                    </button>
                    {stateErrors && (stateErrors.err === 401) && <span>Wrong username or password</span>}
                        </div>
                        <pre>{JSON.stringify(values, 0, 2)}</pre>
                    </form>
                )}
            />
        </div>
    );
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