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
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  documentDetails: state.viewDocDetails.documentDetails,
});

const DocumentDetails = ({
  className,
  modal,
  toggle,
  documentDetails,
  status,
}) => {
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
            <h5>{documentDetails.fileName}</h5>
            <h5>{documentDetails.fileNumber}</h5>
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
                <td>{documentDetails.from}</td>
                <td>{documentDetails.to}</td>
                <td>{documentDetails.sent}</td>
                <td>{documentDetails.received}</td>
                <td>{documentDetails.status}</td>
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

export default connect(mapStateToProps)(DocumentDetails);
