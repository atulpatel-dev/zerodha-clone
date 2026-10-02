import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from './landing_Page/home/HomePage'
import About from "./landing_Page/about/AboutPage";
import PricinPage from "./landing_Page/pricing/PricingPage";
import ProductPage from "./landing_Page/product/ProductPage";
import Signup from "./landing_Page/signUp/Signup";
import SupportPage from "./landing_Page/support/SupportPage";
import Navbar from './landing_Page/Navbar';
import Footer from './landing_Page/Footer';
import NotFound from './landing_Page/NotFound';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/pricing' element={<PricinPage />} />
        <Route path='*' element={<NotFound />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
