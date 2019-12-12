import React from 'react';
import RecipeCard from '../RecipeCard';

const RecipeList = ({ title, recipes }) => {
    return (
        <section className="all-recipes">
            <h1>{title}</h1>
            <div className="all-recipes">
                {
                    recipes ?
                        <>
                            <div>{recipes.map((recipe, i) => <RecipeCard recipe={recipe} key={i} />)}</div>
                        </>
                        :
                        <div>Loading...</div>
                }
            </div>
        </section>
    );
}

export default RecipeList;