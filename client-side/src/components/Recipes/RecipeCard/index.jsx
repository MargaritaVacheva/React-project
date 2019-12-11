import React, { useContext } from 'react';
import { UserContext } from '../../App/App';
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types';

const RecipeCard = ({ recipe }) => {
    const { user } = useContext(UserContext);


    console.log(recipe);
    const { _id, image, title, method, ingredients, category, serves, cookingTime, prepTime, author } = recipe;
    return (
        <div className="recipe-tile" >
            {image && <img className="recipe-image" src={image} alt={title} />}
            <div>
                <span className="recipe-title">{title}</span>
                <span className="recipe-ingredients">{ingredients}</span>
                <span className="recipe-method">{method}</span>
                <span className="recipe-category">{category}</span>
                <div>
                    <span className="recipe-serves">{serves}</span>
                    <span className="recipe-cookingTime">{cookingTime}</span>
                    <span className="recipe-prepTime">{prepTime}</span>
                </div>
                <span className="recipe-author">{author.username}</span>
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

