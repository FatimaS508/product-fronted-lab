import React from 'react'
import { useEffect, useState } from 'react'
import {useParams, useNavigate } from 'react-router'
import { getProductById, deleteProductById } from '../services/ProductService'
import { Link } from 'react-router'


function ProductDetailsPage() {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const {id} = useParams()

   useEffect(() => {
    async function loadProduct() {
      try {
        setLoading(true);
        setError(false);
        const response = await getProductById(id);
        setProduct(response);
      } catch (err) {
        setError(err.response.data.message);
      } finally {
        setLoading(false);
      }
    }
    loadProduct();
  }, []);


      async function handleDelete(){
        try{
             await deleteProductById(id)
            navigate('/products')
        }catch(err){
            setError(err.response.data.message)
        }
      }

  if (loading) return <p>Loading...</p>;
  if (error) {
    return <p className="error">Error: {error}</p>;
  }
  if (!product) {
  return <p>No product found</p>;
}
  return (

    <div>
      <Link to='/products' className="back-button">
        Back to All Products
      </Link>
        <h1>Product details</h1>
        <div key={product.id} className='product-card'>
            <h2>Name of product: {product.title}</h2>
            <p>Category: {product.category}</p>
            <p>Description: {product.description}</p>
            <p>quantity: {product.quantity}</p>
            <p>Price: {product.price}</p>
        <Link
          to={`/products/${product._id}/edit`}
          className="edit-button"
        >
          Edit
        </Link>
            <button onClick={handleDelete} className="delete-button">
                Delete
            </button>
        </div>
    </div>
  )
}

export default ProductDetailsPage