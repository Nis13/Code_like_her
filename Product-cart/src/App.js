import React, { useState, useEffect } from 'react';
import ProductsList from './components/ProductsList';
import AddProductForm from './components/AddProductForm';
import axios from 'axios';
import Nav from './components/nav';
import "../src/App.css"

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const addProduct = (newProduct) => {
    setProducts([newProduct, ...products]);
  };

  const deleteProduct = (productId) => {
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
  };

  const clearProducts = () => {
    setProducts([]);
  };

  return (
    <>
      <Nav />
      <AddProductForm addProduct={addProduct} />
      <ProductsList products={products} deleteProduct={deleteProduct} />
      <div className='clear_button_container'><button className="clear_button" onClick={clearProducts}>Clear All</button></div> 
    </>
  );
};

export default App;
