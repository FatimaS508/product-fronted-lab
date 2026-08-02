import React from 'react'
import {useState} from 'react'
import { createProduct } from '../services/ProductService'
import { useNavigate } from 'react-router'

function CreateProductPage() {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    quantity: 0,
    price: 0
  });
  const navigate = useNavigate();

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newProduct  = await createProduct(formData);
      navigate('/products/' + newProduct._id);
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <div>
      <h1 class="form-title">Create Product</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">Select category</option>
          <option value="electronics">Electronics</option>
          <option value="food">Food</option>
          <option value="clothing">Clothing</option>
          <option value="furniture">Furniture</option>
          <option value="other">Other</option>
        </select>
        <label>
          Description:
          <textarea name="description" value={formData.description} onChange={handleChange} />
        </label>
        <label>
          Quantity:
          <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={formData.price} onChange={handleChange} />
        </label>
        <button type="submit">Create Product</button>
      </form>
    </div>
  )
}

export default CreateProductPage