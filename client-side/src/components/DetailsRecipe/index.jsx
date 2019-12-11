import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../App/App';
import { Link, useParams } from 'react-router-dom';
import recipeServices from '../../services/recipes-services';

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
            <h3>Recipe details:</h3>
            {recipe ?
                <div className="recipe-tile" >
                    {recipe.image && <img className="recipe-image" src={recipe.image} alt={recipe.title} />}
                    <div>
                        <span className="recipe-title">{recipe.title}</span>
                        <span className="recipe-ingredients">{recipe.ingredients}</span>
                        <span className="recipe-method">{recipe.method}</span>
                        <span className="recipe-category">{recipe.category}</span>
                        <div>
                            <span className="recipe-serves">{recipe.serves}</span>
                            <span className="recipe-cookingTime">{recipe.cookingTime}</span>
                            <span className="recipe-prepTime">{recipe.prepTime}</span>
                        </div>
                        <span className="recipe-author">{recipe.author.username}</span>
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

