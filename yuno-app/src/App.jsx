import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import ProductContextProvider from "./components/context/productContext";
import Login from "./components/auth/Login";
function App() {
  return (
    <>
      <ProductContextProvider>
        <BrowserRouter>
          <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navbar />} />
          </Routes>
        </BrowserRouter>
      </ProductContextProvider>
    </>
  );
}

export default App;
