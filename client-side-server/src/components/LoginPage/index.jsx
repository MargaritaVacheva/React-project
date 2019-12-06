import React from 'react';
// import imageUrl from '../../photos/miroslava-mTtuQIrDZMg-unsplash.jpg';
import { Link, useHistory } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import services from '../../services/user-services';

const LoginPage = ({ setImageUrl }) => {
    // setImageUrl(imageUrl);
    const history = useHistory();

    const onSubmit = values => {
        services.login(values)
            .then((data) => {
                console.log(data);
                localStorage.setItem("username", data.username);
                history.push("/");
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="form-layout">
            <h2>Login</h2>
            <Form
                onSubmit={onSubmit}
                validate={values => {
                    const errors = {}
                    if (!values.username) {
                        errors.username = 'Required'
                    }
                    if (!values.password) {
                        errors.password = 'Required'
                    }
                    return errors
                }}
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
                        </div>
                        <pre>{JSON.stringify(values, 0, 2)}</pre>
                    </form>
                )}
            />
        </div>
    );
}

export default LoginPage;