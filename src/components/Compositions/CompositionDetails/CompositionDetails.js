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
  Label,
} from "reactstrap";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  documentDetails: state.documents.documentDetails,
  userType: state.user.type,
});

const CompositionDetails = ({
  className,
  modal,
  toggle,
  documentDetails,
  userType,
}) => {
  const BUTTONS = (status) => {
    if (status === "PENDING") {
      return (
        <>
          <Button color="danger" onClick={toggle}>
            Cancel
          </Button>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </>
      );
    } else if (status === "APPROVED") {
      return (
        <>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </>
      );
    } else {
      return (
        <>
          <Button color="success" disabled onClick={toggle}>
            Send
          </Button>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </>
      );
    }
  };

  const sendDocForm = (status) => {
    if (status === "DISAPPROVED") {
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

  if (userType === "user") {
    return (
      <div>
        <Modal
          isOpen={modal}
          toggle={toggle}
          className={className}
          style={{ maxWidth: "1000px" }}
        >
          <ModalHeader toggle={toggle}></ModalHeader>
          <ModalBody>
            <div className="d-flex justify-content-between">
              <h5>{documentDetails.filename}</h5>
              <h5>{documentDetails.id}</h5>
            </div>
            <Table bordered>
              <thead>
                <tr>
                  <th>TO</th>
                  <th>REMARKS</th>
                  <th>APPROVAL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{documentDetails.to_user}</td>
                  <td>{documentDetails.remarks}</td>
                  <td>{documentDetails.checked}</td>
                </tr>
              </tbody>
            </Table>
            {sendDocForm(documentDetails.checked)}
          </ModalBody>
          <ModalFooter>{BUTTONS(documentDetails.checked)}</ModalFooter>
        </Modal>
      </div>
    );
  } else {
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
                  <th>REMARKS</th>
                  <th>DATE SENT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{documentDetails.from}</td>
                  <td>{documentDetails.to}</td>
                  <td>{documentDetails.remarks}</td>
                  <td>{documentDetails.sent}</td>
                </tr>
              </tbody>
            </Table>
            <Button color="info" onClick={toggle} className="d-block mx-auto">
              DOWNLOAD TO VIEW
            </Button>
            <FormGroup>
              <Label>Remarks:</Label>
              <Input type="textarea" />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={toggle}>
              APPROVE
            </Button>
            <Button color="danger" onClick={toggle}>
              DISAPPROVE
            </Button>
            <Button color="secondary" onClick={toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
};

export default connect(mapStateToProps)(CompositionDetails);
