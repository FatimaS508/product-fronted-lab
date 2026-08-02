//pages import
import Home from "./pages/HomePage";
import AllProductPage from "./pages/AllProductPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CreateProductPage from "./pages/CreateProductPage";
import UpdateProductPage from "./pages/UpdateProductPage";

import {Link, Route, Routes} from "react-router";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProductPage/>}></Route>
        <Route path="/products/:id" element={<ProductDetailsPage/>}></Route>
        <Route path="/products/create" element={<CreateProductPage/>}></Route>
        <Route path="/products/:id/edit" element={<UpdateProductPage/>}></Route>
      </Routes>
    </div>
  )
};

export default App;
