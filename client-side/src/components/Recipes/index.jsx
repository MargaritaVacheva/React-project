import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList';
import recipeServices from '../../services/recipes-services';

const Recipes = () => {
    const [recipes, setRecipes] = useState(null);
    const title = 'All recipes';

    useEffect(() => {
        recipeServices.load()
            .then((recipes) => {
                setRecipes(recipes);
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <RecipeList title={title} recipes={recipes}/>
    );
}

export default Recipes;
