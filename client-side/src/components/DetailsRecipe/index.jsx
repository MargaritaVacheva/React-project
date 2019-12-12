import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../App/App';
import { Link, useParams } from 'react-router-dom';
import recipeServices from '../../services/recipes-services';
import defaultImage from '../../photos/hannah-pemberton-bXi4eg4jyuU-unsplash.jpg';

const DetailsRecipe = () => {
    const [recipe, setRecipe] = useState(null);
    const { user } = useContext(UserContext);
    let { id } = useParams();

    useEffect(() => {
        recipeServices.load(id)
            .then((recipeDetails) => {
                setRecipe(recipeDetails[0]);
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <section className="details-recipe">
            {recipe ?
                <div className="details-recipe" >
                    <h2 className="recipe-title">{recipe.title}</h2>
                    <img className="recipe-image" src={recipe.image || defaultImage} alt={recipe.title} /> 
                    <div>
                        <div className="recipe-stats">
                            <span className="recipe-serves">Serves: {recipe.serves}</span>
                            <span className="recipe-cookingTime">Cooking time: {recipe.cookingTime}min</span>
                            <span className="recipe-prepTime">Prep time: {recipe.prepTime}min</span>
                        </div>
                        <p className="recipe-ingredients"><span>Ingredients: </span>{recipe.ingredients}min</p>
                        <h4 className="recipe-method">Metod: </h4>
                        <p className="recipe-method">{recipe.method}</p>
                        <p className="recipe-category">{recipe.category}</p>
                        <p className="recipe-author">Published by: {recipe.author.username}</p>
                        {(user._id === recipe.author._id) ?
                            <div>
                                <Link to={`/editRecipe/${id}`}>Edit</Link>
                            </div> : ""
                        }
                    </div>
                </div>
                :
                <div>Loading...</div>
            }
        </section>
    );
}

export default DetailsRecipe;

