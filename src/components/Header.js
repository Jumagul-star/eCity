import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Form,
} from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.PNG";
import "./Header.css";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="header-nav" light expand="md">
        <NavbarBrand href="/">
          <img className="logo-hdr" src={logo} alt="logo"></img>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink></NavLink>
            </NavItem>
            <Form>
          <div className="form-grp">
            <input type="search" name="search" className="search-inp" placeholder="Поиск..."/>
            <button className="nav-btn">Искать</button>
          </div>
        </Form>
          </Nav>
          <Link className="links mr-3">Account</Link>
          <Link className="links" to="/auth/logout">Logout</Link>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
