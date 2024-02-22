import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeList from './components/RecipeList';
import Detail from './components/Detail';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // fetch recipe when query is changed
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=` + query);
        setRecipes(response.data.meals || []);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes(); // call it when query changes
  }, [query]); // dependency on query state


  const handleViewDetail = (recipe) => {
    setSelectedRecipe(recipe); // set the setSelectedRecipe to clicked recipe 
  };

  // when back is clicked
  const handleBack = () => {
    setSelectedRecipe(null); // reset selected recipe to null
  };

  return (
    <div className="App">
      <h1>Recipe Finder</h1>
      {selectedRecipe ? (
        <Detail recipe={selectedRecipe} onBack={handleBack} />   // if recipe selected, to show details
      ) : (
        <div>
        <input
            type="text"
            placeholder="Search for meal by name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)} />   
        <RecipeList recipes={recipes} onViewDetail={handleViewDetail} /> 
        </div>
      )}
    </div>
  );
}

export default App;
