import React from "react";
import { Nav, NavItem, Badge } from "reactstrap";
import { Link } from "react-router-dom";
const SubNav = () => {
  return (
    <Nav horizontal className="border-top mt-4 bg-dark">
      <NavItem>
        <Link
          className="nav-link bg-dark text-light"
          to={"/compositions/pending"}
        >
          Pending
        </Link>
      </NavItem>
      <NavItem>
        <Link
          className="nav-link bg-dark text-light"
          to={"/compositions/approved"}
        >
          Approved <Badge color="primary">2</Badge>
        </Link>
      </NavItem>
      <NavItem>
        <Link
          className="nav-link bg-dark text-light"
          to={"/compositions/disapproved"}
        >
          Disapproved
        </Link>
      </NavItem>
    </Nav>
  );
};

export default SubNav;
