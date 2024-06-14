"use client";
import { Nav } from "react-bootstrap";
import Link from "next/link";
const Navs = () => {
  return (
    <>
      <Nav id="navmenu" className="navmenu">
        <ul>
          <li>
            <Link href="/" className="active">
              Home
              <br />
            </Link>
          </li>
          <li>
            <Link href="/community">Community</Link>
          </li>
          <li>
            <Link href="/menu">Menu</Link>
          </li>

          <li className="dropdown">
            <Link href="#">
              <span>Dropdown</span>
              <i className="bi bi-chevron-down toggle-dropdown"></i>
            </Link>
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
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </Nav>
    </>
  );
};

export default Navs;
