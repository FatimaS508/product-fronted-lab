import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { getProductById, updateProduct } from "../services/ProductService";
import { Link } from "react-router";

function UpdateProductPage() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    quantity: 0,
    price: 0,
  });

  const navigate = useNavigate();
  const { id } = useParams();

  async function loadProduct() {
    try {
      const response = await getProductById(id);
      setFormData(response);
    } catch (error) {
      console.error("Error loading product:", error);
    }
  }

  useEffect(() => {
    loadProduct();
  }, [id]);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: name === "quantity" || name === "price" 
        ? Number(value) 
        : value,
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const updatedProduct = await updateProduct(id, formData);
      navigate("/products/" + updatedProduct._id);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div>
      <Link to="/products" className="back-button">
        Back to All Products
      </Link>
      <h1 class="form-title">Update Product</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>

        <label>
          Category:
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
        </label>

        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>

        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
        </label>

        <label>
          Price:
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Update Product</button>
      </form>
    </div>
  );
}

export default UpdateProductPage;