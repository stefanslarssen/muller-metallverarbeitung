import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Products from './components/Products';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import CookieConsent from './components/CookieConsent';

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <Hero />
      <Products />
      <Stats />
      <Services />
      <About />
      <Contact />
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
      <CookieConsent />
    </LanguageProvider>
  );
}

export default App;
