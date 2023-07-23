
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function SearchBar() {
  return (
    <>

    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="img\images.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
         WomenStoppage
        </Navbar.Brand>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav>
            <Nav.Link href="#deets">Login</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
             Wishlist
            </Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  </>
  );
}

export default SearchBar;