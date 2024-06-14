"use client";
import { Navbar } from "react-bootstrap";
import { MdFoodBank } from "react-icons/md";
const NavbarBrand = () => {
  return (
    <Navbar.Brand
      href="index.html"
      className="logo d-flex align-items-center me-auto me-xl-0"
    >
      <MdFoodBank id="sitename" style={{ width: "30", height: "30" }} />
      <h1 id="sitename">Foodchain</h1>
    </Navbar.Brand>
  );
};

export default NavbarBrand;
