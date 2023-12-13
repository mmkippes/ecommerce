import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';
import { Link } from 'react-router-dom';
import { useAllProducts, useAllProductsByCategory } from '../../hooks/useProducts';


const NavBarComponent = () => {
    const [categories, setCategories] = useState([]);
    const { products } = useAllProducts(); // Obtener todos los productos para mostrar en caso de no seleccionar una categoría
    const { loading, error } = useAllProductsByCategory(); // Cargar todas las categorías

    useEffect(() => {
        if (!loading && !error) {
            // Filtrar las categorías de los productos
            const uniqueCategories = Array.from(new Set(products.map((product) => product.category)));
            setCategories(uniqueCategories);
        }
    }, [loading, error, products]);

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
                        Ecommerce
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            {categories.map((category, index) => (
                                <NavDropdown.Item key={index}>
                                    <Link
                                        to={`/category/${category}`}
                                        style={{ textDecoration: 'none', color: 'black', display: 'block' }}
                                    >
                                        {category}
                                    </Link>
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    </Nav>
                    <CartWidgetComponent />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBarComponent;