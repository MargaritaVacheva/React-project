import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App/App';
import defaultImage from '../../../photos/hannah-pemberton-bXi4eg4jyuU-unsplash.jpg';

const RecipeCard = ({ recipe }) => {
    const { user } = useContext(UserContext);

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
                        <Link to={`/editRecipe/${_id}`}>Edit</Link>
                    </div>
                    : 
                    <Link id="recipe-details-btn" to={`/details/${_id}`}>Details</Link>
                }
            </div>
        </div>
    );
}

export default RecipeCard;

