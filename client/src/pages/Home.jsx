import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import ProductsSection from '../components/ProductsSection'
import ClientsSection from '../components/ClientsSection'
import Testimonials from '../components/Testimonials'
import CtaSection from '../components/CtaSection'
import '../index.css'

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <ClientsSection />
      <Testimonials />
      <CtaSection />
    </>
  )
}

export default Home