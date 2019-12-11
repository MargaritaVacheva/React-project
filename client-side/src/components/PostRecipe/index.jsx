import React, { useContext } from 'react';
import { Form, Field } from 'react-final-form';
import { Link, useHistory } from 'react-router-dom';
import recipeServices from '../../services/recipes-services';
import { UserContext } from '../App/App';

const PostRecipe = () => {
    const history = useHistory();
    const { setUser } = useContext(UserContext);

    const onSubmit = (values) => {
        recipeServices.post(values)
            .then((res) => {
                setUser(res[0]);
                history.push("/profile");
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="form-layout">
            <h2>Share your favourite recipe! :)</h2>
            <Form
                onSubmit={onSubmit}
                validate={handleValidation}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                        <Field name="title">
                            {({ input, meta }) => (
                                <>
                                    <div>
                                        <label>Title</label>
                                        <input {...input} type="text" placeholder="Title" />
                                    </div>
                                    <p>* {meta.error && meta.touched && <span>{meta.error}</span>}</p>
                                </>
                            )}
                        </Field>
                        <Field name="ingredients">
                            {({ input, meta }) => (
                                <>
                                    <div>
                                        <label>Ingredients</label>
                                        <input {...input} type="text" placeholder="Ingredients" />
                                    </div>
                                    <p>* {meta.error && meta.touched && <span>{meta.error}</span>}</p>
                                </>
                            )}
                        </Field>
                        <Field name="category">
                            {({ input, meta }) => (
                                <>
                                    <div>
                                        <label>Category</label>
                                        <select {...input} type="text" placeholder="Category">
                                            <option value="Breakfast">Breakfast</option>
                                            <option value="Snacks">Snacks</option>
                                            <option value="Appetisers">Appetisers</option>
                                            <option value="Soups">Soups</option>
                                            <option value="Main dishes">Main dishes</option>
                                            <option value="Salads">Salads</option>
                                            <option value="Vegetarian">Vegetarian</option>
                                            <option value="Desserts">Desserts</option>
                                            <option value="Drinks">Drinks</option>
                                        </select>
                                    </div>
                                    <p>* {meta.error && meta.touched && <span>{meta.error}</span>}</p>
                                </>
                            )}
                        </Field>
                        <Field name="method">
                            {({ input, meta }) => (
                                <>
                                    <div>
                                        <label>Method</label>
                                        <input {...input} type="text" placeholder="Method" />
                                    </div>
                                    <p>* {meta.error && meta.touched && <span>{meta.error}</span>}</p>
                                </>
                            )}
                        </Field>
                        <Field name="serves">
                            {({ input, meta }) => (
                                <>
                                    <div>
                                        <label>Serves</label>
                                        <input {...input} type="number" placeholder="1" />
                                    </div>
                                    <p>* {meta.error && meta.touched && <span>{meta.error}</span>}</p>
                                </>
                            )}
                        </Field>
                        <Field name="cookingTime">
                            {({ input, meta }) => (
                                <>
                                    <div>
                                        <label>Cook time</label>
                                        <input {...input} type="number" placeholder="0" min="0" max="1440" />
                                    </div>
                                    <p>* {meta.error && meta.touched && <span>{meta.error}</span>}</p>
                                </>
                            )}
                        </Field>
                        <Field name="prepTime">
                            {({ input, meta }) => (
                                <>
                                    <div>
                                        <label>Preparing-time</label>
                                        <input {...input} type="number" placeholder="5" min="5" max="1440" />
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

export default PostRecipe;

const handleValidation = values => {

    const errors = {}
    if (!values.title) {
        errors.title = 'required'
    } else if (values.title.length < 6) { errors.title = 'title should be at least 6 chars' }

    if (!values.method) {
        errors.method = 'required'
    } else if (values.method.length < 100) { errors.method = 'method should be at least 100 chars' }

    if (!values.ingredients) {
        errors.ingredients = 'required'
    } else if (values.ingredients.length < 50) { errors.ingredients = 'ingredients should be at least 50 chars' }

    if (!values.serves) {
        errors.serves = 'required'
    }
    if (!values.cookingTime) {
        errors.cookingTime = 'required'
    }
    if (!values.prepTime) {
        errors.prepTime = 'required'
    }
    return errors
}
