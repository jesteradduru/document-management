import React from "react";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import User from "../containers/User";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  isSignedIn: state.loginUser.isSignedIn,
});

const App = ({ isSignedIn }) => {
  if (!isSignedIn) {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" children={<Login />} />
            <Route path="/register" children={<Register />} />
          </Switch>
        </Router>
      </>
    );
  } else {
    return <User />;
  }
};

export default connect(mapStateToProps)(App);
