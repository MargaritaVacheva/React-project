import React from 'react';
import imageUrl from '../../photos/miroslava-mTtuQIrDZMg-unsplash.jpg';
import { Form, Field } from 'react-final-form';
import { onSubmit } from '../RegisterPage';

const LoginPage = ({ setImageUrl }) => {
    setImageUrl(imageUrl);

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