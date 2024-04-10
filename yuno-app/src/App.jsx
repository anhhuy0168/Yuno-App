import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import ProductContextProvider from "./components/context/productContext";
import Login from "./components/auth/Login";
import AuthContextProvider from "./components/context/authContext";
import ProductDetail from "./components/Products/ProductDetail";
import ProductCart from "./components/Products/ProductCart";
import CartContextProvider from "./components/context/cartContext";
import Profile from "./components/auth/Profile";
import ChangePass from "./components/auth/ChangePass";
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
                <Route path="/productCart" element={<ProductCart />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/changePass" element={<ChangePass />} />
              </Routes>
            </BrowserRouter>
          </CartContextProvider>
        </ProductContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
