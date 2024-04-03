import { useState } from 'react'
import '../../yuno-app/src/Style/Homepage.scss'
import Navbar from'./components/layout/Navbar'
import Sidebar from './components/layout/Sidebar'
import ProductContextProvider from './components/context/productContext'
import ProductBox from './components/Products/ProductBox'
import Banner from "./components/layout/Banner"
function App() {
  return (
  <>
  <ProductContextProvider>
    <Navbar/>
    <Banner/>
    <Sidebar/>    
    <ProductBox/>

  </ProductContextProvider>

  </>
  
  )
}

export default App
