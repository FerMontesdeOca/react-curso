import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartShopping from '../CartWidget/CartWidget';
import"./Navbar.scss";
import {Link} from "react-router-dom";
import { useLoginContext} from "../context/LoginContext";

export const MenuNavbar = () => {
  const { user, logout } = useLoginContext();

  return (
    <div className="menu__navbar">
    <Navbar expand="lg" className='navbarCatalogo' >
      <Container >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link id='linkNavbar' to="/">Todos los Productos</Link>
            <Link id='linkNavbar' to="/Desktops">Computadoras</Link>
            <Link id='linkNavbar' to="/Laptops">Laptops</Link>
            <Link id='linkNavbar' to="/Accesorios">Accesorios</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    <CartShopping/>
    </Navbar>
    <div className='header__container'>
                <p>Bienvenido: {user.email}</p>
                <button className='btn btn-danger' onClick={logout}>Logout</button>
            </div>
    </div>
  );
}


