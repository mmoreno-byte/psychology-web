import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Booking from './components/Booking'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{ backgroundColor: '#f8f9fa', color: '#333', minHeight: '100vh' }}>
      <Hero />
      <About />
      <Services />
      <Booking />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
