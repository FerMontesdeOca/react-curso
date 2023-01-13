import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartShopping from '../CartWidget/CartWidget';
import"./Navbar.scss";
import {Link} from "react-router-dom";

function MenuNavbar() {
  return (
    <div className="menu__navbar">
    <Navbar expand="lg" >
      <Container>
        <Link to="/">Todo Pc's</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link><Link id='linkNavbar' to="/">Todos los Productos</Link></Nav.Link>
          <Nav.Link><Link id='linkNavbar' to="/Desktops">Computadoras</Link></Nav.Link>
          <Nav.Link><Link id='linkNavbar' to="/Laptops">Laptops</Link></Nav.Link>
          <Nav.Link><Link id='linkNavbar' to="/Accesorios">Accesorios</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <CartShopping/>
    </div>
  );
}

export default MenuNavbar;

