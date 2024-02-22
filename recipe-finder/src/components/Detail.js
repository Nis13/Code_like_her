import React from 'react';

function Detail({ recipe, onBack }) {
  return (
    <div className="detail">
      <button className="back-button" onClick={onBack}>Back</button>
      <div className='details'>
       <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        <p><b>Name:</b>{recipe.strMeal}</p>
        <p><b>Category:</b> {recipe.strCategory}</p>
        <p><b>Area:</b> {recipe.strArea}</p>
      </div>
      <h3>Ingredients:</h3>
      <ul>
        {Object.keys(recipe)
          .filter((key) => key.includes('strIngredient') && recipe[key])
          .map((key) => (
            <li key={key}>{recipe[key]}</li>
          ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{recipe.strInstructions}</p>
    </div>
  );
}

export default Detail;
