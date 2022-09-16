import React from 'react';
import Contact from './components/contact/Contact';
import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer'
import Experience from './components/experience/Experience';


function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
