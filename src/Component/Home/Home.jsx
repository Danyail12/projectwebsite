import React from 'react'
import Header from '../Header/Header'
import HeroSection from '../HeroSection/HeroSection'
import AboutSecond from '../AboutSection/AboutSecond';
import ServiceSecond from '../ServiceSecond/ServiceSecond';
import CompleteProject from '../OurCompleteProject/CompleteProject';
import Faq from '../Faq/Faq';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
const Home = () => {
  return (
   <>
    <HeroSection/>
    <AboutSecond/>
    <ServiceSecond/>
    <CompleteProject/>
    <Faq/>
    <Banner/>
    
   </>
  )
}

export default Home