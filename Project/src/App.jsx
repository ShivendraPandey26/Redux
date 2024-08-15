import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './components/products'
import Layout from './components/Layout';
import Cart from './components/Cart';
import Home from './components/Home';

function App() {

  return (
    <BrowserRouter>
    <Routes path='/' element = {<Layout />}>
      <Route index element={<Home />} />
      <Route  path='/products' element={<Products />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
