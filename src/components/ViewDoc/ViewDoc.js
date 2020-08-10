import React from "react";
import PrevPage from "../PrevPage/PrevPage";
import { Button } from "reactstrap";
const ComposeForm = ({ path }) => {
  return (
    <>
      <div className="d-flex">
        <PrevPage color="danger" text="Cancel" className="ml-auto mr-3" />
        <Button color="success">Download & Edit</Button>
      </div>
      <iframe
        src="https://view.officeapps.live.com/op/embed.aspx?src=http%3A%2F%2Fieee802%2Eorg%3A80%2Fsecmail%2FdocIZSEwEqHFr%2Edoc"
        width="100%"
        height="80%"
        frameborder="0"
      >
        This is an embedded{" "}
        <a target="_blank" href="http://office.com">
          Microsoft Office
        </a>{" "}
        document, powered by{" "}
        <a target="_blank" href="http://office.com/webapps">
          Office Online
        </a>
        .
      </iframe>
    </>
  );
};

export default ComposeForm;
