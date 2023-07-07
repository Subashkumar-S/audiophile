import React from 'react';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar'
import About from "./Components/About"
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </div>
  );
}

export default App;
