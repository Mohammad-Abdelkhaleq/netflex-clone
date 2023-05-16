import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function MovieNavbar () {
  return (
    <>
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">movieEmpire</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Favourites">Favourites</Nav.Link>
            <Nav.Link href="#pricing">about</Nav.Link>
          </Nav>
        </Container>
      </Navbar>;
    </>
  );
}
export default MovieNavbar;