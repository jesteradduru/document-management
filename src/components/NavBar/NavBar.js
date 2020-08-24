import React from "react";
import { Nav, NavItem, Badge } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const NavBar = () => {
  return (
    <div className="bg-dark text-light py-4 shadow" style={{ height: "100vh" }}>
      <Icon
        icon={faUser}
        className="mx-auto d-block"
        style={{ fontSize: "5em" }}
      />
      <h1 className="text-center">Lorem, ipsum.</h1>

      <Nav vertical className="border-top mt-4">
        <NavItem>
          <Link
            className="nav-link bg-dark text-light"
            to={"/compositions/pending"}
          >
            Compositions <Badge color="primary">2</Badge>
          </Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link bg-dark text-light" to={"/incoming"}>
            Incoming <Badge color="primary">2</Badge>
          </Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link bg-dark text-light" to={"/onprocess"}>
            On Process
          </Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link bg-dark text-light" to={"/outgoing"}>
            Outgoing
          </Link>
        </NavItem>
      </Nav>
    </div>
  );
};

export default NavBar;
