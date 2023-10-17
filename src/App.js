import React from 'react'
import './App.css';
import Bg from "./components/Bg" 
import Menu from "./components/Menu" 
import Header from "./components/Header"
import Gallery from "./components/Gallery"
import About from "./components/About"
import Recicle from "./components/Recicle"
import Form from "./components/Form"

  function App() {
    return (
    <>
      <Bg/>
      <Menu/>
      <Header/>
      <Gallery/>
      <About/>
      <Recicle/>
      <Form/>
    </>
    );
  }
  
  export default App;