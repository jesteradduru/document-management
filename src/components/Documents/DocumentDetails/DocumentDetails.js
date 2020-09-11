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
import { AcceptDocument, DownloadDocument } from "../DocumentActions";
const mapStateToProps = (state) => ({
  documentDetails: state.documents.documentDetails,
});

const mapDispatchToProps = (dispatch) => ({
  onAcceptDoc: (id) => dispatch(AcceptDocument(id)),
  onDownloadDoc: (id) => dispatch(DownloadDocument(id)),
});

const DocumentDetails = ({
  className,
  modal,
  toggle,
  documentDetails,
  onAcceptDoc,
  onDownloadDoc,
}) => {
  const BUTTONS = (status) => {
    if (status === "PENDING") {
      return (
        <>
          <Button
            color="primary"
            onClick={() => {
              toggle();
              onAcceptDoc(documentDetails.id);
            }}
          >
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
          <Button
            color="primary"
            onClick={() => {
              toggle();
              onDownloadDoc(documentDetails.id);
            }}
          >
            Download & Edit
          </Button>
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
          <Table bordered responsive>
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
                <td>{documentDetails.from_user}</td>
                <td>{documentDetails.to_user}</td>
                <td>{documentDetails.date_sent}</td>
                <td>{documentDetails.date_received}</td>
                <td>{documentDetails.status}</td>
              </tr>
            </tbody>
          </Table>
          {sendDocForm(documentDetails.status)}
        </ModalBody>
        <ModalFooter>{BUTTONS(documentDetails.status)}</ModalFooter>
      </Modal>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DocumentDetails);
