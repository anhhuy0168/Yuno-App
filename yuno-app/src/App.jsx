import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import ProductContextProvider from "./components/context/productContext";
import Login from "./components/auth/Login";
import AuthContextProvider from "./components/context/authContext";
import ProductDetail from "./components/Products/ProductDetail";
import ProductCart from "./components/Products/ProductCart";
import CartContextProvider from "./components/context/cartContext";
function App() {
  return (
    <>
      <AuthContextProvider>
        <ProductContextProvider>
          <CartContextProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Navbar />} />
                <Route path="/login" element={<Login />} />
                <Route path="/productDetail/:id" element={<ProductDetail />} />
                <Route path="/productCart/:id" element={<ProductCart />} />
              </Routes>
            </BrowserRouter>
          </CartContextProvider>
        </ProductContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
