import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';


const NavBarComponent = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Mountaineering</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#link">Productos</Nav.Link>
                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                Calzado
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Mochilas
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                Carpas
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">
                                Accesorios
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">
                                Indumentaria
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <CartWidgetComponent />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarComponent;