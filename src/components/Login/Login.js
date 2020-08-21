import React from "react";
import { Input, Button, Card, FormGroup, Form } from "reactstrap";
import { Link } from "react-router-dom";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: "",
      isLoading: false,
      loaderHidden: true,
    };
  }
  onLogin = (event) => {
    event.preventDefault();
    // this.setState({ isLoading: true, loaderHidden: false });
    // fetch("https://tatak-cash-api.herokuapp.com/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     username: this.state.username,
    //     password: this.state.password,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.verified) {
    //       this.setState({ isLoading: false });
    //       this.props.onLogin();
    //       this.props.loadTransactions();
    //     } else {
    //       this.setState({ error: data });
    //       this.setState({ isLoading: false, loaderHidden: true });
    //     }
    //   })
    //   .catch(console.log);
  };

  onUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };
  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <Card
        className="mx-auto pt-4 px-4 shadow mt-md-5 bg-dark shadow pb-3"
        style={{ maxWidth: "330px" }}
      >
        <h3 className="text-center text-primary">Document Management System</h3>
        <p className="text-center text-secondary">LOGIN</p>
        <hr />
        <Form
          onSubmit={(event) => {
            this.onLogin(event);
          }}
        >
          <FormGroup>
            <Input
              type="text"
              placeholder="Username"
              className="form-control bg-dark border border-secondary text-secondary"
              onKeyUp={this.onUsernameChange}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              placeholder="Password"
              className="form-control bg-dark border border-secondary text-secondary"
              onKeyUp={this.onPasswordChange}
            />
          </FormGroup>
          <FormGroup>
            {" "}
            <Loader
              isLoading={this.state.isLoading}
              text="Login Successful"
              hidden={this.state.loaderHidden}
            />
          </FormGroup>
          <ErrorMessage errMsg={this.state.error} />
          <Link to="/register">You don't have an account? Register</Link>
          <Button
            color="primary"
            type="submit"
            className="mx-auto d-block mt-3"
          >
            Login
          </Button>
        </Form>
      </Card>
    );
  }
}

export default Login;
