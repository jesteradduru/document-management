import React from "react";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import User from "../containers/User";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isSignedIn: true,
      name: "Jester Adduru",
      type: "user",
    };
  }
  render() {
    const { isSignedIn } = this.state;

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
  }
}

export default App;
