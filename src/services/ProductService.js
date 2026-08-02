import axios from "axios";

const api = axios.create({
    baseURL: `${import.meta.env.VITE_BACK_END_SERVER_URL}`
})

async function getAllProducts(){
    const response= await api.get('/products')
    return response.data
}

async function getProductById(id){
    const response = await api.get(`/products/${id}`)
    return response.data
}

async function deleteProductById(id){
    const response = await api.delete(`/products/${id}`)
    return response.data
}

async function createProduct(body){
    const response = await api.post(`/products`,body)
    return response.data
}

async function updateProduct(id, body){
    const response = await api.put(`/products/${id}`,body)
    return response.data
}


export {getAllProducts, deleteProductById, createProduct, updateProduct , getProductById}