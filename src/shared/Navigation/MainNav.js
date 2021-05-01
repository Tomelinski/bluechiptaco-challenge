import "bootstrap/dist/css/bootstrap.min.css";
//import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const MainNav = () => {
  const loggedIn = false;
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">BlueChipTaco</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
        <Nav>{!loggedIn && <Nav.Link href="/Login">Login</Nav.Link>}</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNav;
