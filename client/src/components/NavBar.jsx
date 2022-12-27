import { React } from "react";
import { Link, NavLink } from "react-router-dom"
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Indent from "../images/indent.png";

import { OffCanvasLoginButton } from "./OffCanvasLoginButton";


export const NavBar = () => {
    


  return (
    <Navbar variant="dark" expand="lg" sticky="top" className="NavBar">
      <Image src={Indent} className="GameHubIndent"></Image>
      <Navbar.Brand className="GameHubLogo" href="#/home/">
        <Link className="linkfix" to="/">&#127918; GameHub</Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Nav className="GameHubSearchBar justify-content-center mx-auto">
        <Form.Control
          type="search"
          htmlSize="50"
          placeholder="Search"
          className="SearchBar"
        />
      </Nav>
      <Nav>
        <NavLink to="/saved-games" className="GameHubSavedGames">
          &#9829;&#65039;&nbsp;Saved Games
        </NavLink>
        <OffCanvasLoginButton />
      </Nav>
    </Navbar>
  );
};
