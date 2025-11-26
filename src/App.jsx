import { useState } from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import "./index.css"
import Footer from './components/Footer/Footer'
import ServicesSection from './components/ServicesSection/ServicesSection'
import ContactSection from './components/ContactSection/ContactSection'
import GallerySection from './components/GallerySection/GallerySection'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="home" className="scroll-smooth">
      {/* <NavBar /> */}
      <div className="flex flex-col">
        MINISA KANE
        {/* <HeroSection />
        <div id="services">
          <ServicesSection />
        </div>
        <div id="gallery">  
          <GallerySection />
        </div>
        <div id="contact"> 
          <ContactSection />
        </div>
        <Footer /> */}
      </div>
    </div>
  )
}

export default App
