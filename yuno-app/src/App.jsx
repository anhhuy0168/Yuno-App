import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import ProductContextProvider from "./components/context/productContext";
import Login from "./components/auth/Login";
import AuthContextProvider from "./components/context/authContext";
function App() {
  return (
    <>
    <AuthContextProvider>
    <ProductContextProvider>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </ProductContextProvider>
    </AuthContextProvider>
  
    </>
  );
}

export default App;
