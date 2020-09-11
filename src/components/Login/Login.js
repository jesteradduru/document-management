import React from "react";
import { Input, Button, Card, FormGroup, Form } from "reactstrap";
import { Link } from "react-router-dom";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { LoginUser } from "../../containers/AppActions";
import { connect } from "react-redux";
const mapStateToProps = (state) => ({
  errMsg: state.user.errorMessage,
});
const mapDispatchToProps = (dispatch) => ({
  onSignIn: (user) => dispatch(LoginUser(user)),
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      type: "user",
      isLoading: false,
      loaderHidden: true,
    };
  }

  onLogin = (event) => {
    event.preventDefault();
    this.props.onSignIn({
      username: this.state.username,
      password: this.state.password,
    });
  };

  onInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    //
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
              onKeyUp={this.onInputChange}
              name="username"
              required
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              placeholder="Password"
              className="form-control bg-dark border border-secondary text-secondary"
              onKeyUp={this.onInputChange}
              name="password"
              required
            />
          </FormGroup>
          <ErrorMessage errMsg={this.props.errMsg} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
