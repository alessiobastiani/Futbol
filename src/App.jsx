import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailConteiner from './components/ItemDetailConteiner'
import Home from "./components/Home"
import Cart from "./components/Cart"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShoppingCartProvider from './contex/ShoppingCartContext'


const App = () => {
  return (
    <BrowserRouter>
    <ShoppingCartProvider>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Cart' element={<Cart/>}/>
        <Route exact path='/categoria/:categoria' element={<ItemListContainer/>}/>
        <Route exact path='/Item/:id' element={<ItemDetailConteiner/>}/>
      </Routes>
    </ShoppingCartProvider>
    </BrowserRouter>
  )
}

export default App
