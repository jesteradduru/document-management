import React from "react";
import { FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import SearchBox from "../SearchBox/SearchBox";

const Controls = () => {
  return (
    <div className="d-flex justify-content-between">
      <FormGroup>
        <Link className="btn btn-primary" to="/compose">
          Compose
        </Link>
      </FormGroup>
      <FormGroup>
        <SearchBox className="ml-auto" />
      </FormGroup>
    </div>
  );
};

export default Controls;
