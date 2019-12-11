import React from 'react';
import { Link } from 'react-router-dom';
import defaultImage from '../../../photos/hannah-pemberton-bXi4eg4jyuU-unsplash.jpg';

const RecipeCard = ({ recipe }) => {
    let { _id, image, title, serves, cookingTime, prepTime, author } = recipe;
    image = image || defaultImage;
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
                <Link to={`/details/${_id}`}>Details</Link>
            </div>
        </div>
    );
}

export default RecipeCard;

