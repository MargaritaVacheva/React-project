import React, { useState, useEffect } from 'react';
import recipeServices from '../../services/recipes-services';


const Recipes = ( ) => {
    const [recipes, setRecipes] = useState("");

    useEffect(() => {
        recipeServices.load()
            .then((recipes) => {
                setRecipes(recipes);
            })
            .catch(err => console.log(err));
    }, [])

    return ( 
        <section className="all-recipes">
        {recipes ? 
            <pre>{JSON.stringify(recipes, null, 2)}</pre> :
            <div>Loading...</div>     
        }
        </section>

     );
}
 
export default Recipes;