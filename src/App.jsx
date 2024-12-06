import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import MainLayouts from './Layouts/MainLayouts'
import Products from './pages/Products'
import ProductsInfo from './pages/ProductInfo'

function App() {
  return (

    <div className='container mx-auto'>

      <Routes>
        <Route path='/' element={<MainLayouts><Home></Home></MainLayouts>}></Route>
        <Route path='/About' element={<MainLayouts><About></About></MainLayouts>}></Route>
        <Route path='/Products' element={<MainLayouts><Products></Products></MainLayouts>}></Route>
        <Route path='/Cart' element={<MainLayouts><Cart></Cart></MainLayouts>}></Route>
        <Route path='/Products/:id' element={<MainLayouts><ProductsInfo></ProductsInfo></MainLayouts>}></Route>
      </Routes>
    </div>
  )
}

export default App