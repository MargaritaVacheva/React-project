import React from 'react';
import { Form, Field } from 'react-final-form';
import { Link, useHistory } from 'react-router-dom';
import services from '../../services/user-services';
import imageUrl from '../../photos/joanna-kosinska-llLttk4TgT4-unsplash.jpg';
import './styles.css';



const RegisterPage = ( {setImageUrl }) => {
    setImageUrl(imageUrl);
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
                validate={values => {
                    const errors = {}
                    if (!values.username) {
                        errors.username = 'Required'
                    }
                    if (!values.password) {
                        errors.password = 'Required'
                    }
                    if (!values.email) {
                        errors.email = 'Required'
                    }
                    if (!values.confirm) {
                        errors.confirm = 'Required'
                    } else if (values.confirm !== values.password) {
                        errors.confirm = 'Must match'
                    }
                    return errors
                }}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                        <Field name="username">
                            {({ input, meta }) => (
                                <div>
                                    <label>Username</label>
                                    <input {...input} type="text" placeholder="Username" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="email">
                            {({ input, meta }) => (
                                <div>
                                    <label>Email</label>
                                    <input {...input} type="email" placeholder="E-mail" />
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
                        <Field name="confirm">
                            {({ input, meta }) => (
                                <div>
                                    <label>Confirm</label>
                                    <input {...input} type="password" placeholder="Confirm" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
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