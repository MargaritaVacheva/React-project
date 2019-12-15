import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList';
import recipeServices from '../../services/recipes-services';

const Recipes = () => {
    const [recipes, setRecipes] = useState(null);
    const title = 'All recipes';
    const [ isRecipesUpdate, setIsRecipesUpdate ] = useState(false);

    const loadRecipes = () => {
        recipeServices.load()
            .then((recipes) => {
                setRecipes(recipes);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        loadRecipes();
        }, [isRecipesUpdate]);

    return (
        <RecipeList title={title} recipes={recipes} isRecipesUpdate={isRecipesUpdate} 
        setIsRecipesUpdate={setIsRecipesUpdate}/>
    );
}

export default Recipes;
