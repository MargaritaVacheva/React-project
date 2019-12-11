import React, { useContext } from 'react';
import { UserContext } from '../../App/App';
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types';
import defaultImage from '../../../photos/hannah-pemberton-bXi4eg4jyuU-unsplash.jpg';

const RecipeCard = ({ recipe }) => {
    let { _id, image, title, method, ingredients, category, serves, cookingTime, prepTime, author } = recipe;
    image = image || defaultImage;
    return (
        <div className="recipe-tile" >
            <img className="recipe-image" src={image} alt={title} />
            <div>
                <p className="recipe-title">{title}</p>
                {/* <span className="recipe-ingredients">{ingredients}</span> */}
                {/* <span className="recipe-method">{method}</span> */}
                {/* <span className="recipe-category">{category}</span> */}
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

// RecipeCard.defaultProps = {
// image: '',
// title: 'Placeholder',
// method: '',
// price: 0
// }

// RecipeCard.propTypes = {
// image: PropTypes.string.isRequired,
// title: PropTypes.string.isRequired,
// method: PropTypes.string,
// price: PropTypes.number.isRequired
// }

export default RecipeCard;

