import React, { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../../App/App';
import defaultImage from '../../../photos/hannah-pemberton-bXi4eg4jyuU-unsplash.jpg';

const RecipeCard = ({ recipe }) => {
    const { user, setUser } = useContext(UserContext);
    let location = useLocation();

    let { _id, image, title, serves, cookingTime, prepTime, author } = recipe;
    image = image || defaultImage;

    console.log(user)
    console.log(author)


    return (
        <div className="recipe-tile" >
            <img className="recipe-image" src={image} alt={title} />
            <div>
                <p className="recipe-title">{title}</p>
                <div className="recipe-stats">
                    <span className="recipe-serves">Serves: {serves}</span>
                    <span className="recipe-cookingTime">Cookig: {cookingTime}min</span>
                    <span className="recipe-prepTime">Prep: {prepTime}min</span>
                </div>
                <span className="recipe-author">Published by: {author.username}</span>
                {(user._id === author._id) || (user._id === author) ?
                    <div className="buttons">
                        <Link to={`/details/${_id}`}>Details</Link>
                        <Link to={{
                            pathname: `/editRecipe/${_id}`,
                            state: { from: location }
                        }}>Edit</Link>
                        <Link to={`/deleteRecipe/${_id}`}>Delete</Link>
                    </div>
                    :
                    <Link id="recipe-details-btn" to={`/details/${_id}`}>Details</Link>
                }
            </div>
        </div>
    );
}

export default RecipeCard;

