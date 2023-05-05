import React from "react";
import { Container } from "react-bootstrap";
import { Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import Store from "./components/Store";
import About from "./components/About";
import Navbar from "./components/Navbar";
import ShoppingCartProvider from "./context/ShoppingCartContext";
import Product from "./components/Product";
  


const App = ()=>{
  return (
    <ShoppingCartProvider>
    <Navbar/>
    <Container className="mb-4">
      <Routes>
        <Route  exact path="/" element={<Home />} />
        <Route  exact path="/about" element={<About />} />
        <Route exact path="/store" element={<Store />} />
        <Route exact path="/store/:id" element={<Product />} />
      </Routes>
    </Container>
    </ShoppingCartProvider>
    
  );
};
export default App;
