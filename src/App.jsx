import { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import './App.css'
import Header from './Header/Header'
import VehicleComponent from './Series/VehicleComponent'
import Footer from './Footer/Footer'
import ContactForm from './ContactForm/ContactForm'
import ContactNote from './ContactNote/ContactNote'
import Slider from './Slider/Slider'
import DesignPerformanceTabs from './Pages/DesignPerformanceTabs'
import FAQ from './Pages/Faq'
import Banner from './Baner/Baner'

import VedioSection from './VedioSection/VedioSection'
import ImageCarousel from './ImageSection/ImageCarousel'
import IconBar from './HeroSection/IconBar'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <ThemeProvider theme={theme}>
      <Header/>
      <IconBar/>
      <Slider/>
      <VehicleComponent/>
      <ContactForm/>
      <DesignPerformanceTabs/>
      <FAQ/>
      <ContactNote/>
      <Banner/>
     <VedioSection/>
     <ImageCarousel/>
      <Footer/>
      </ThemeProvider>
    </>
  )
}

export default App
