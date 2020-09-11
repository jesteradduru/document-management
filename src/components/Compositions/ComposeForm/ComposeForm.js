import React from "react";
import { FormGroup, Input, Button, Form } from "reactstrap";
import { Link } from "react-router-dom";
import PrevPage from "../../PrevPage/PrevPage";
import { compose } from "../CompositionActions";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => ({
  onCompose: (e) => {
    dispatch(getFormData(e));
  },
});

const getFormData = (e) => {
  return (dispatch, getState) => {
    const state = getState();
    e.preventDefault();
    const composeForm = document.getElementById("composeForm");
    const composeFormData = new FormData(composeForm);
    composeFormData.append("from", state.user.username);
    dispatch(compose(composeFormData));
  };
};
const ComposeForm = ({ onCompose }) => {
  return (
    <Form id="composeForm" onSubmit={onCompose}>
      <FormGroup>
        <Input type="text" placeholder="Filename" name="filename" required />
      </FormGroup>
      <FormGroup>
        <Input type="file" name="document" required />
      </FormGroup>
      <FormGroup>
        <Input type="text" placeholder="To" name="to" required />
      </FormGroup>
      <FormGroup>
        <Button color="success" type="submit">
          Send
        </Button>
        <Link to="/incoming">
          <PrevPage color="danger" className="ml-3" text="Go Back" />
        </Link>
      </FormGroup>
    </Form>
  );
};

export default connect(null, mapDispatchToProps)(ComposeForm);
