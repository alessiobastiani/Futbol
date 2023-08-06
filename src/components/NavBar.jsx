import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import CartWidget from './CartWidget'
import Brand from '../assets/1.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Navbar  data-bs-theme="dark" expand="lg" className="colour">
      <Container className='contenedor'>
        <Navbar.Brand>
          <Link to={"/"}>
          <img className='brand-logo' src={Brand} alt="" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto ColorLinck ">
            <Link to={`/categoria/${"Casacas"}`} className='linck' >Casacas</Link>
            <Link to={`/categoria/${"Botines"}`} className='linck'>Botines</Link>
            <Link to={`/categoria/${"Pelotas"}`} className='linck' >Pelotas</Link>
          </Nav>
          <Link to={"/Cart"}>
          <CartWidget/>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar