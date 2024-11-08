import React from 'react'
import HeroSection from './components/HeroSection';
import ProductPage from './ProductPage/page';
import ProductDescription from './ProductPage/productDescription/page';
import ServicePage from './ServicesPage/page';
import ContactPage from './ContactPage/page';


const page = () => {
  return (
    <div>
      <HeroSection />
      <ProductPage />
      <ProductDescription />
      <ServicePage />
      <ContactPage />

    </div>

  )
}

export default page;