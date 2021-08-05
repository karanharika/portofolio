import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navigation.css";


class Navigation extends Component {
    render() {

        return (

            <div className="outNavBar">
            <div className="inNavBar">
            <Navbar variant="dark" expand="lg">
                <Navbar.Brand href='/#/'>K$H</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href='/#/'>Home</Nav.Link>
                    <Nav.Link href='/#/projects'>Projects</Nav.Link>
                    {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                </Nav>
                </Navbar.Collapse>

            </Navbar>
            </div></div>
        )
    };
};

export default Navigation