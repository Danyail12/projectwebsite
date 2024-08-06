import { useState } from 'react'
import Header from './Component/Header/Header'
import HeroSection from './Component/HeroSection/HeroSection';
import AboutSecond from './Component/AboutSection/AboutSecond';
import ServiceSecond from './Component/ServiceSecond/ServiceSecond';
import CompleteProject from './Component/OurCompleteProject/CompleteProject';
import Faq from './Component/Faq/Faq';
import Banner from './Component/Banner/Banner';
import Footer from './Component/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Service from './Component/Service/Service';
import About from './Component/AboutUs/About';
import Portfolio from './Component/Portfolio/Portfolio';
import Blog from './Component/Blog/Blog';
import Contact from './Component/Contact/Contact';
import Home from './Component/Home/Home';



function App() {

  return (
    <>
     
     <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Service />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                {/* <Route path="/get-quote" element={<GetQuote />} /> */}
            </Routes>
            <Footer />
        </Router>
     
    </>
  )
}

export default App
