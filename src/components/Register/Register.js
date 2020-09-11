import React from "react";
import { Input, FormGroup, Label, Button, Form } from "reactstrap";
import ErrorMessage from "../Forms/ErrorMessage";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { RegisterUser } from "../../containers/AppActions";

const mapStateToProps = (state) => ({
  errMsg: state.user.errorMessage,
});
const mapDispatchToProps = (dispatch) => ({
  onRegister: (user) => dispatch(RegisterUser(user)),
});
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      type: "user",
    };
  }

  onInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onRegister = (e) => {
    e.preventDefault();
    this.props.onRegister({
      username: this.state.username,
      password: this.state.password,
      type: this.state.type,
    });
  };

  render() {
    return (
      <Form
        onSubmit={(e) => this.onRegister(e)}
        className="card bg-dark mx-auto pt-4 px-4 shadow border border-secondary mt-md-5 my-5"
        style={{ maxWidth: "330px" }}
      >
        <h3 className="text-center text-primary">Document Management System</h3>
        <p className="text-center text-secondary">REGISTER</p>
        <hr />
        <FormGroup>
          <Input
            type="text"
            className="form-control bg-dark border border-secondary text-secondary"
            name="username"
            onChange={this.onInputChange}
            placeholder="Username"
            autoComplete="true"
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            className="form-control bg-dark border border-secondary text-secondary"
            onChange={this.onInputChange}
            placeholder="Password"
            autoComplete="true"
            name="password"
            required
          />
        </FormGroup>
        <FormGroup tag="fieldset" className="text-secondary">
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="type"
                checked
                onChange={this.onInputChange}
                value="user"
                autoComplete="true"
                required
              />
              User
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input
                type="radio"
                name="type"
                onChange={this.onInputChange}
                value="overseer"
                autoComplete="true"
                required
              />
              Overseer
            </Label>
          </FormGroup>
        </FormGroup>
        <ErrorMessage errMsg={this.props.errMsg} />
        <Link to="/">You already have an account? Login</Link>
        <Button type="submit" color="primary mb-4 mt-3 mx-auto d-block">
          Register
        </Button>
      </Form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
