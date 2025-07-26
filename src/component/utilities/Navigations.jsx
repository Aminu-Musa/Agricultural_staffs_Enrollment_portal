import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Enrollment from '../pages/Enrollment'
import ErrorPage from '../pages/ErrorPage'

import Footer from './Footer'
import Header from './Header'

const Navigations = () => {
  return (
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/enrollment" element={<Enrollment />} />
      
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>

  )
}

export default Navigations