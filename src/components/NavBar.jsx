
import CartWidget from './CartWidget'
import Brand from '../assets/1.png'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const NavBar = () => {
  return (
    <>
      <div className='oferta'>
      <p className='gratis'>Envios gratis a todo el pais</p>
      {['md'].map((expand) => (
        <Navbar data-bs-theme="dark" key={expand} expand={expand} className="colour">
          <Container fluid>
            <Navbar.Brand >
            <Link to={"/"}>
              <img className='brand-logo' src={Brand} alt="" />
            </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              data-bs-theme="dark"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Futbol 22
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className=" ColorLinck justify-content-center  flex-grow-1 pe-3">
                <Link to={`/categoria/${"Casacas"}`} className='linck' >Casacas</Link>
                <Link to={`/categoria/${"Botines"}`} className='linck'>Botines</Link>
                <Link to={`/categoria/${"Pelotas"}`} className='linck' >Pelotas</Link>
                </Nav>
                <Link to={"/Cart"}>
                <CartWidget/>
              </Link>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      </div>
    </>
  );
}

export default NavBar