import React from "react";
import { Nav, NavItem, Badge, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { LogoutUser } from "../../containers/AppActions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(LogoutUser()),
});
const NavBar = ({ userType, username, onLogout }) => {
  const history = useHistory();
  if (userType === "user") {
    return (
      <div
        className="bg-dark text-light py-4 shadow"
        style={{ height: "100vh" }}
      >
        <Icon
          icon={faUser}
          className="mx-auto d-block"
          style={{ fontSize: "5em" }}
        />
        <h1 className="text-center">{username}</h1>
        <Button
          onClick={() => {
            onLogout();
            history.push("/");
          }}
          size="sm"
          color="info"
          className="d-block mx-auto"
        >
          Logout
        </Button>
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
  } else {
    return (
      <div
        className="bg-dark text-light py-4 shadow"
        style={{ height: "100vh" }}
      >
        <Icon
          icon={faUser}
          className="mx-auto d-block"
          style={{ fontSize: "5em" }}
        />
        <h1 className="text-center">{username}</h1>
        <Button
          onClick={() => {
            onLogout();
            history.push("/");
          }}
          size="sm"
          color="info"
          className="d-block mx-auto"
        >
          Logout
        </Button>

        <Nav vertical className="border-top mt-4">
          <NavItem>
            <Link className="nav-link bg-dark text-light" to={"/"}>
              Documents <Badge color="primary">2</Badge>
            </Link>
          </NavItem>
        </Nav>
      </div>
    );
  }
};

export default connect(null, mapDispatchToProps)(NavBar);
