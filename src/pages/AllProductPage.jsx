import React from 'react'
import { useEffect, useState } from 'react'
import { getAllProducts } from '../services/ProductService' 
import { Link } from 'react-router'

function AllProductPage() {
    const [products, setProducts] = useState([])

    async function loadProducts(){
        try{
            const response = await getAllProducts()
            console.log(response)
            setProducts(response)
        }catch(err){console.log(err)}
    }

    useEffect(() =>{
        loadProducts()
    }, [])
  return (
    <div>
        <h1>All Product</h1>
        {products.map((one)=><div key={one.id} className='product-card'> 
            <h2>{one.title}</h2>
            <Link to={`/products/${one._id}`} className="view-details-link">
                View Details
            </Link>
        </div>)}
    </div>
  )
}

export default AllProductPage