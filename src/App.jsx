import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import{Container}from "reactstrap";
import Header from "./components/Header";

import './App.css'

function App() {
 return(
    < >
    <div className="d-flex flex-column "style={{minHeight:"100vh"}}>
      <Header
    /></div>
      <Container className="flex-grow-1">
        <h1>My content</h1>
      </Container>
      <footer>
        Picview 2025
      </footer>
    </>
  )
}

export default App
