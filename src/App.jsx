

import './App.css'

import Hero from './componets/Hero';
import Footer from './componets/Footer';
import Menu from './componets/menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import AboutMePage from './componets/About';
import Contact from './componets/ContactForm';
import CartComponent from './componets/cartCompoent';
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Hero />} />  {/* Your homepage with the Hero component */}
      <Route path="/about" element={<AboutMePage />} />
      <Route path="/menu" element={<Menu />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/cart' element={<CartComponent />} />

    </Routes>
  </BrowserRouter>
  )
}

export default App
