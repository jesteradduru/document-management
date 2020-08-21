import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
  FormGroup,
  Input,
} from "reactstrap";
// import { Link } from "react-router-dom";
const DocumentDetails = ({ className, modal, toggle, docDetails, status }) => {
  const BUTTONS = (status) => {
    if (status === "PENDING") {
      return (
        <>
          <Button color="primary" onClick={toggle}>
            Accept
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </>
      );
    } else if (status === "ONPROCESS") {
      return (
        <>
          <Button color="primary">Download & Edit</Button>
          <Button color="success" disabled onClick={toggle}>
            Send
          </Button>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </>
      );
    } else {
      return <></>;
    }
  };

  const sendDocForm = (status) => {
    if (status === "ONPROCESS") {
      return (
        <>
          <FormGroup>
            <Input type="file" />
          </FormGroup>
          <FormGroup>
            <Input type="textarea" placeholder="Remarks" />
          </FormGroup>
        </>
      );
    }
  };
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
          <div className="d-flex justify-content-between">
            <h5>{docDetails.fileName}</h5>
            <h5>{docDetails.fileNumber}</h5>
          </div>
          <Table bordered>
            <thead>
              <tr>
                <th>FROM</th>
                <th>TO</th>
                <th>SENT</th>
                <th>RECEIVED</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{docDetails.from}</td>
                <td>{docDetails.to}</td>
                <td>{docDetails.sent}</td>
                <td>{docDetails.received}</td>
                <td>{docDetails.status}</td>
              </tr>
            </tbody>
          </Table>
          {sendDocForm(status)}
        </ModalBody>
        <ModalFooter>{BUTTONS(status)}</ModalFooter>
      </Modal>
    </div>
  );
};

export default DocumentDetails;
