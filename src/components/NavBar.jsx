import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import CartWidget from './CartWidget'


const NavBar = () => {
  return (
    <Navbar expand="lg" className="colour">
      <Container> 
      <Navbar.Brand className='brand' href="#home">Futbol22</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ColorLinck">
            <Nav.Link href="#link">Casacas</Nav.Link>
            <Nav.Link href="#link">Botines</Nav.Link>
            <Nav.Link href="#link">Pelotas</Nav.Link>
          </Nav>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar