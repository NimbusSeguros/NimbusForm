import './App.css'
import FeaturesSection from './components/FeaturesSection'
import Headers from './components/Headers'
import UniqueFeatures from './components/UniqueFeatures'
import PageCarrousel from './components/PageCarrousel'
import { ImgCompanias } from './components/ImgCompanias'
import ContactForm from './components/ContactForm'
import FullScreenVideo from './components/FullScreenVideo'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import '@fontsource-variable/open-sans';


function App() {
 

  return (
    <>
      <Headers/>
      <FeaturesSection/>
      <UniqueFeatures/>
      <PageCarrousel/>
      <ContactForm/>
      <ImgCompanias/>
      <FullScreenVideo/>
      <HeroSection/>
      <Footer/>
    </>
  )
}

export default App
