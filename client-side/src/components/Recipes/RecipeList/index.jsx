import React from 'react';
import RecipeCard from '../RecipeCard';

const RecipeList = ({ title, recipes, isRecipesUpdate, setIsRecipesUpdate }) => {
    return (
        <section className="all-recipes">
            <h1>{title}</h1>
            <div className="all-recipes">
                {
                    recipes ?
                        <>
                            <div>{recipes.map((recipe, i) => <RecipeCard recipe={recipe} key={recipe._id}
                             isRecipesUpdate={isRecipesUpdate} 
                             setIsRecipesUpdate={setIsRecipesUpdate}/>)}</div>
                        </>
                        :
                        <div>Loading...</div>
                }
            </div>
        </section>
    );
}

export default RecipeList;