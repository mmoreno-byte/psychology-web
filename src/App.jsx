import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import FirstSession from './components/FirstSession'
import Booking from './components/Booking'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{ backgroundColor: 'var(--cream)', color: 'var(--ink)', minHeight: '100vh' }}>
      <Hero />
      <About />
      <Services />
      <FirstSession />
      <Booking />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
