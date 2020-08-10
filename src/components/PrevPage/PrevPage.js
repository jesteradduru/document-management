import React from "react";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";
const PrevPage = ({ className, color, text }) => {
  let history = useHistory();
  return (
    <Button
      color={color}
      className={className}
      onClick={() => history.goBack()}
    >
      {text}
    </Button>
  );
};

export default PrevPage;
