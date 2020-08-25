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

const CompositionDetails = ({ className, modal, toggle, documentDetails }) => {
  const BUTTONS = (status) => {
    if (status === "PENDING") {
      return (
        <>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
          <Button color="danger" onClick={toggle}>
            Cancel
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
                <th>TO</th>
                <th>REMARKS</th>
                <th>APPROVAL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{documentDetails.to}</td>
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
};

export default connect(mapStateToProps)(CompositionDetails);
