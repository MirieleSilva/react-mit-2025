import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import{Container}from "reactstrap";
import Header from "./components/Header";
import Home from "./components/Home";
import backgroundImg from './assets/background.jpg' // Usa a imagem importada
import Feedback from "./components/Feedback";
import './App.css';

function App() {
 return(
    <Router >
    <div className="d-flex flex-column" style={{
          minHeight: "100vh",
          backgroundImage: `url(${backgroundImg})`, // Usa a variável importada
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}>
      <Header/>
      <Container className="flex-grow-1 d-flex justify-content-center pt-2">    
        <Routes>
          <Route exact path="/" element={<Feedback/>} />
        {/* <Route exact path="/" element={<Home/>} />   */}
        </Routes>
      </Container>
      <footer className="bg-black text-white text-center p-3">
        PICVIEW 2025
      </footer>
      </div>
    </Router>
  );
}

export default App
