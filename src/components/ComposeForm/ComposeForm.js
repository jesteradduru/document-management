import React from "react";
import { FormGroup, Input, Button } from "reactstrap";

const ComposeForm = () => {
  return (
    <>
      <h1>Compose</h1>
      <hr />
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
      </FormGroup>
    </>
  );
};

export default ComposeForm;
