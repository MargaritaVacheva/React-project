import React, { useContext, useState } from 'react';
import { Form, Field } from 'react-final-form';
import { useHistory } from 'react-router-dom';
import userServices from '../../services/user-services';
import { UserContext } from '../App/App';

const EditProfile = () => {
    const history = useHistory();
    const { user, setUser } = useContext(UserContext);
    const [stateErrors, setErrors] = useState(null);

    const onSubmit = (values) => {
        userServices.put(user._id, values)
            .then((modifiedUser) => {              
                setUser(modifiedUser);
                history.push("/profile");
            })
            .catch((err) => {
                setErrors({ err });
            });
    }

    return (
        <div className="form-layout">
            <h2>Edit Profile</h2>
            {user ?
                <Form
                    initialValues={{ ...user }}
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
                            <div className="buttons">
                                <button type="submit" disabled={submitting}>
                                    Edit
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
                :
                <div>Loading...</div>
            }
        </div>
    );
}

export default EditProfile;

const handleValidation = values => {

    const emailPattern = /^[A-Za-z0-9_.]+@[A-Za-z0-9_.]{2,}\.[A-Za-z]{2,4}$/gm;
    const errors = {}
    if (!values.username) {
        errors.username = 'required';
    } else if (values.username.length < 4) {
        errors.username = 'username should be at least 4 chars';
    }

    if (!values.email) {
        errors.email = 'required';
    } else if (!values.email.match(emailPattern)) {
        errors.email = 'not a valid email';
    }
    return errors
}
