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
          <Button color="primary">Edit</Button>{" "}
          <Button color="success" disabled onClick={toggle}>
            Send
          </Button>{" "}
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
        <FormGroup>
          <Input type="file" />
        </FormGroup>
      );
    }
  };
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Fund Request</ModalHeader>
        <ModalBody>
          <p className="lead text-primary">
            File Number: {docDetails.fileNumber}
          </p>
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
