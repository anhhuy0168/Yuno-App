import { useState } from 'react'
import '../../yuno-app/src/Style/Homepage.scss'
import Navbar from'./components/layout/Navbar'
import Sidebar from './components/layout/Sidebar'
import ProductContextProvider from './components/context/productContext'
function App() {
  return (
  <>
  <ProductContextProvider>
    <Navbar/>
    <Sidebar/>
  </ProductContextProvider>

  </>
  
  )
}

export default App
