import React from "react";
import { FormGroup, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import PrevPage from "../PrevPage/PrevPage";

const ComposeForm = () => {
  return (
    <>
      <FormGroup>
        <Input type="text" placeholder="Filename" />
      </FormGroup>
      <FormGroup>
        <Input type="file" />
      </FormGroup>
      <FormGroup>
        <Input type="text" placeholder="To" />
      </FormGroup>
      <FormGroup>
        <Button color="success">Send</Button>
        <Link to="/incoming">
          <PrevPage color="danger" className="ml-3" text="Go Back" />
        </Link>
      </FormGroup>
    </>
  );
};

export default ComposeForm;
