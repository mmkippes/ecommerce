import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';
import { Link } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react";



const NavBarComponent = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories').then(res => {
            setCategories(res.data);

        }).catch(e => console.log(e))
    }, [])


    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home"><Link to={"/"} style={{ textDecoration: "none", color: "black" }} >Mountaineering</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            {categories.map((category, index) => {
                                return (
                                    <NavDropdown.Item key={index}>
                                        <Link to={`/category/${category}`} style={{ textDecoraLinktion: "none", color: "black" }} > {category} </Link>
                                    </NavDropdown.Item>
                                )
                            })}
                        </NavDropdown>
                    </Nav>
                    <CartWidgetComponent />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarComponent;