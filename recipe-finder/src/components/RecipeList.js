import React from 'react';

function RecipeList({ recipes, onViewDetail }) {
  return (
      <ul className="recipe-list">
      {recipes.map((recipe) => (
        <li key={recipe.idMeal} className="recipe-card">
          <h2>{recipe.strMeal}</h2>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <button onClick={() => onViewDetail(recipe)}>View</button>
        </li>
      ))}
      </ul>
  );
}

export default RecipeList;
