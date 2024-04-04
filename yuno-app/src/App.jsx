import { useState } from "react";
import "../../yuno-app/src/Style/Homepage.scss";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import ProductContextProvider from "./components/context/productContext";
import Banner from "./components/layout/Banner";
import Testimonials from "./components/Products/Testimonials";
import Footer from "./components/layout/Footer"
import Blog from "./components/layout/Blog"
function App() {
  return (
    <>
      <ProductContextProvider>
        <Navbar />
        <Banner />
        <Sidebar />
        <Testimonials/>
        <Blog/>
        <Footer/>
      </ProductContextProvider>
    </>
  );
}

export default App;
