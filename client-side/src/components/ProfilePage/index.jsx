import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App/App';

const ProfilePage = () => {
    const { user } = useContext(UserContext);

    console.log(user);

    return (
        <section className="profile">
            <div className="profile">
                <img src={user.imageUrl} alt="profile"></img>
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
            <label>Recipes</label>
            <pre>{JSON.stringify(user.recipes, null, 2)}</pre>
        </section>
    );
}

export default ProfilePage;