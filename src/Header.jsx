import logo from "../assets/customcolor_icon_transparent_background.png"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar,NavbarBrand,Nav,NavItem,NavLink, NavbarToggler,Container,Collapse } from "reactstrap";
import React, {useState} from "react";
import "../App.css";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar color="black"  expand="md"  className="px-3 d-flex align-items-center ">

        {/* Contêiner para o logo, com largura fixa */}
        <div className="logo-container d-flex align-items-center" style={{ minWidth: "180px" }}>
          <NavbarBrand className="d-flex align-items-center">
            <img src={logo} width="70px" alt="Logo" className="me-2" />
            <span className="text-white">PICVIEW</span>
          </NavbarBrand>
        </div>

        {/* Container centralizado para a Nav */}
        <div className="flex-grow-1 d-flex justify-content-center ">
          <Nav navbar className="navbar-nav d-flex">
            <NavItem >
              <NavLink  tag={Link} to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/users">Applications</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/price">Price</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/about">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </div>

        {/* Espaço vazio para equilibrar visualmente */}
        <div className="d-flex" style={{ minWidth: "180px" }}></div>
      </Navbar>
    </>
  );
};

export default Header;