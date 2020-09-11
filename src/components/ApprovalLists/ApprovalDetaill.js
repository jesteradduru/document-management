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
  Form,
} from "reactstrap";
import { connect } from "react-redux";
import { documentApproval } from "./ApprovalListsActions";
const mapStateToProps = (state) => ({
  documentDetails: state.documents.documentDetails,
  userType: state.user.type,
});

const approvalData = (approval) => {
  return (dispatch, getState) => {
    const approvalFrom = document.getElementById("approvalForm");
    const formData = new FormData(approvalFrom);
    const state = getState();
    dispatch(
      documentApproval(approval, formData, state.documents.documentDetails.id)
    );
  };
};

const mapDispatchToProps = (dispatch) => ({
  onApproval: (approval) => dispatch(approvalData(approval)),
});

const ApprovalDetaill = ({
  className,
  modal,
  toggle,
  documentDetails,
  onApproval,
}) => {
  return (
    <Modal isOpen={modal} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle}></ModalHeader>
      <ModalBody>
        <div className="d-flex justify-content-between">
          <h5>{documentDetails.filename}</h5>
          <h5>{documentDetails.id}</h5>
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
              <td>{documentDetails.from_user}</td>
              <td>{documentDetails.to_user}</td>
              <td>{documentDetails.remarks}</td>
              <td>{documentDetails.date_sent}</td>
            </tr>
          </tbody>
        </Table>
        <Button color="info" onClick={toggle} className="d-block mx-auto">
          DOWNLOAD TO VIEW
        </Button>
        <Form id="approvalForm">
          <FormGroup>
            <Label>Remarks:</Label>
            <Input type="textarea" name="remarks" />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button
          color="success"
          onClick={() => {
            toggle();
            onApproval("APPROVED");
          }}
        >
          APPROVE
        </Button>
        <Button
          color="danger"
          onClick={() => {
            toggle();
            onApproval("DISAPPROVED");
          }}
        >
          DISAPPROVE
        </Button>
        <Button color="secondary" onClick={toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ApprovalDetaill);
