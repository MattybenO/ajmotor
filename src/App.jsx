import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Testimonials from './Components/Testimonials/Testimonials';
import Newsletters from './Components/Newsletters/Newsletters';
import Footers from './Components/Footers/Footers';
import AOS from "aos";
import 'aos/dist/aos.css';

const App = () => {
  
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  });
  return (
    <main className='overflow-x-hidden'>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Newsletters />
      <Footers />
    </main>
  )
}

export default App
