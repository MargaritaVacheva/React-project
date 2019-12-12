import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App/App';
import RecipeList from '../Recipes/RecipeList';

import defaultImage from '../../photos/chuttersnap-lCf-8i0pKYc-unsplash.jpg';

const ProfilePage = () => {
    const { user } = useContext(UserContext);

    return (
        <section className="profile">
            <div className="profile">
                <img src={user.imageUrl || defaultImage} alt="profile"></img>
            </div>
            <div>
                <label>Name:</label>
                <span>{user.username}</span>
            </div>
            <div>
                <label>Email:</label>
                <span>{user.email}</span>
            </div>
            <p>Share your knowledge.</p>
            <div>
                <Link to="/postRecipe">Add new recipe</Link>
            </div>
            <RecipeList title={"Published by you"} recipes={user.recipes} />
        </section>
    );
}

export default ProfilePage;