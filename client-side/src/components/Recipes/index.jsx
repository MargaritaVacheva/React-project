import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import recipeServices from '../../services/recipes-services';

const Recipes = () => {
    const [recipes, setRecipes] = useState(null);

    useEffect(() => {
        recipeServices.load()
            .then((recipes) => {
                setRecipes(recipes);
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <section className="all-recipes">
            <h1>All recipes</h1>
            <div className="all-recipes">
            {recipes ?
                <>
                    <div>{recipes.map((recipe, i) => <RecipeCard recipe={recipe} key={i} />)}</div>
                    {/* <pre>{JSON.stringify(recipes, null, 2)}</pre> */}
                </>
                :
                <div>Loading...</div>
            }
            </div>
        </section>
    );
}

export default Recipes;