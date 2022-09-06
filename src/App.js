import React from 'react';
import './App.css';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import CarShop from './components/CarShop';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero className="w-screen"/>
      <CarShop />
      <Footer />
    </div>
  );
}

export default App;
