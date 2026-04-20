import './style/lego.css'
import { products } from './assets/legodudes'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import CategoryTitle from './components/CategoryTitle.jsx'
import CategoryPage from './components/CategoryPage.jsx'
import Products from './components/Products.jsx'
import Cart from './components/Cart.jsx'
import Layout from './components/Layout.jsx'

function App() {

  const [isOpen, setIsOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [cartQuantity, setCartQuantity] = useState(0)
  const [totalSum, setTotalSum] = useState(0)

  console.log("Cart", cart)

  useEffect(()=>{
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0)
    setCartQuantity(totalQuantity)
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    setTotalSum(total)
  },[cart])

  function Page(){
    return (
      <div id="container">
        <main>
          <CategoryTitle />
          <Products products={products} setCart={setCart} />
        </main>
      </div>
    )
  }

  return (
    <Layout setIsOpen={setIsOpen} cartQuantity={cartQuantity} isOpen={isOpen} cart={cart} setCart={setCart} totalSum={totalSum}>
      <Routes>
        <Route index element={<Page />} />
        <Route path="kategori/:slug" element={<CategoryPage />} />
      </Routes>
    </Layout>
  )
}
export default App
