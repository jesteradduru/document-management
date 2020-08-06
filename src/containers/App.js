import React from "react";
import Login from "../components/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import User from "../containers/User";
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
      return <Login />;
    } else {
      return <User />;
    }
  }
}

export default App;
