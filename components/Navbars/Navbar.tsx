import { Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import NavbarBrand from "./NavbarBrand";
import Navs from "./Nav";

const NavbarItem = () => {
  return (
    <Navbar id="navbar-items" className="navbar-items" sticky="top">
      <Container>
        <NavbarBrand />
        <Navs />
        <a className="btn-getstarted" href="index.html#book-a-table">
          Book a Table
        </a>
      </Container>
    </Navbar>
  );
};
export default NavbarItem;
