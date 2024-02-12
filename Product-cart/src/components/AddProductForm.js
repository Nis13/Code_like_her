import React, { useState } from 'react';
import "../components/AddProductForm.css";

const AddProductForm = ({ addProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) return;
    const newProduct = { title:name, price: price};
    addProduct(newProduct);
    setName('');
    setPrice('');
  };

  return (
    <div className='form_container'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit" className='submit_button'>Add Product</button>
      </form>
    </div>
  );
};

export default AddProductForm;
