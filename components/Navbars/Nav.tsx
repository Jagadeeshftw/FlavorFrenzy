import { Nav } from "react-bootstrap";
import NavLink from "./NavLink";
const Navs = () => {
  return (
    <>
      <Nav id="navmenu" className="navmenu">
        <ul>
          <li>
            <NavLink href={"/"}>
              {" "}
              Home
              <br />
            </NavLink>
          </li>
          <li>
            <NavLink href={"/community"}> Community</NavLink>
          </li>
          <li>
            <NavLink href={"/menu"}> Menu</NavLink>
          </li>

          <li className="dropdown">
            <NavLink href={"/dropdown"}>
              <span>Dropdown</span>
              <i className="bi bi-chevron-down toggle-dropdown"></i>
            </NavLink>
            <ul>
              <li>
                <a href="#">Dropdown 1</a>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Deep Dropdown</span>
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">Deep Dropdown 1</a>
                  </li>
                  <li>
                    <a href="#">Deep Dropdown 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Dropdown 2</a>
              </li>
            </ul>
          </li>
          <li>
            <NavLink href="/contact">Contact</NavLink>
          </li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </Nav>
    </>
  );
};

export default Navs;
