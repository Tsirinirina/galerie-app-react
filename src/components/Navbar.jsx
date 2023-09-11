import {
    Nav,
    Navbar,
    NavDropdown,
    Container,
  } from "react-bootstrap";
  import { LinkContainer } from "react-router-bootstrap";
  
  function NavBar() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary fixed-top">
        <Container>
          <Navbar.Brand href="#home">Galerie</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Images</Nav.Link>
              </LinkContainer>
              <NavDropdown title="Catégories" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Catégories 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Catégories 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Catégories 3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Catégories I</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default NavBar;
  