import React from "react";
import { connect } from "react-redux";
import { viewDocDetails } from "./DocumentActions";

const mapStateToProps = (state) => ({
  documentDetails: state.documents.documentDetails,
});
const mapDispatchToProps = (dispatch) => ({
  onViewDocumentDetails: (document) => dispatch(viewDocDetails(document)),
});

const Composition = ({ document, checked, toggle, onViewDocumentDetails }) => {
  switch (checked) {
    default:
      return (
        <tr
          onClick={() => {
            onViewDocumentDetails(document);
            toggle();
          }}
        >
          <td>{document.filename}</td>
          <td>{document.to_user}</td>
          <td>{document.remarks}</td>
          <td>{document.checked}</td>
        </tr>
      );
    case "APPROVED":
      return (
        <tr
          className="bg-success text-light"
          onClick={() => {
            onViewDocumentDetails(document);
            toggle();
          }}
        >
          <td>{document.filename}</td>
          <td>{document.to_user}</td>
          <td>{document.remarks}</td>
          <td>{document.checked}</td>
        </tr>
      );
    case "DISAPPROVED":
      return (
        <tr
          className="bg-danger text-light"
          onClick={() => {
            onViewDocumentDetails(document);
            toggle();
          }}
        >
          <td>{document.filename}</td>
          <td>{document.to_user}</td>
          <td>{document.remarks}</td>
          <td>{document.checked}</td>
        </tr>
      );
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Composition);
