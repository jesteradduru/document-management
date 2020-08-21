import React from "react";
import Input from "../Forms/Input";
import ErrorMessage from "../Forms/ErrorMessage";
import { Link } from "react-router-dom";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      errMsg: "",
    };
  }

  render() {
    return (
      <div
        className="card bg-dark mx-auto pt-4 px-4 shadow border border-secondary mt-md-5 my-5"
        style={{ maxWidth: "330px" }}
      >
        <h3 className="text-center text-primary">Document Management System</h3>
        <p className="text-center text-secondary">REGISTER</p>
        <hr />
        <Input
          type="text"
          className="form-control bg-dark border border-secondary text-secondary"
          event={this.onNameChange}
          name="Username"
        />
        <Input
          type="password"
          className="form-control bg-dark border border-secondary text-secondary"
          event={this.onPasswordChange}
          name="Password"
        />
        <ErrorMessage errMsg={this.state.errMsg} />
        <Link to="/">You already have an account? Login</Link>
        <Input
          type="button"
          className="btn btn-primary mx-auto d-block mt-3"
          event={this.onSubmitSignIn}
          name="Register"
        />
      </div>
    );
  }
}

export default Register;
