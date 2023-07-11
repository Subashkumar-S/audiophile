import React from 'react';
import Hero from './Components/Hero';
import About from "./Components/About"
import Footer from './Components/Footer';
import ProductNav from './Components/ProductNav';
function App() {
  return (
    <div className="App overflow-hidden">
      <Hero />
      <ProductNav />
      <About />
      <Footer />
    </div>
  );
}

export default App;
