import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from "./pages/Home"
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from "./pages/Contact"
import Product from './pages/Product'
import MyCart from './pages/MyCart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/cart" element={<MyCart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/place-order" element={<PlaceOrder />} />
            <Route path="/orders" element={<Orders />} />
        </Routes>
    )
}

export default AnimatedRoutes