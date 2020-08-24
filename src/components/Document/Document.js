import React from "react";
import { connect } from "react-redux";
import { viewDocDetails } from "./DocumentActions";

const mapStateToProps = (state) => ({
  documentDetails: state.viewDocDetails.documentDetails,
});
const mapDispatchToProps = (dispatch) => ({
  onViewDocumentDetails: (document) => dispatch(viewDocDetails(document)),
});

const Document = ({
  fileName,
  from,
  to,
  fileNumber,
  document,
  checked,
  toggle,
  onViewDocumentDetails,
}) => {
  if (!checked) {
    return (
      <tr
        onClick={() => {
          onViewDocumentDetails(document);
          toggle();
        }}
      >
        <td>{fileName}</td>
        <td>{from}</td>
        <td>{to}</td>
        <td>{fileNumber}</td>
      </tr>
    );
  } else {
    switch (checked) {
      default:
        return (
          <tr
            onClick={() => {
              onViewDocumentDetails(document);
              toggle();
            }}
          >
            <td>{fileName}</td>
            <td>{from}</td>
            <td>{to}</td>
            <td>{fileNumber}</td>
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
            <td>{fileName}</td>
            <td>{from}</td>
            <td>{to}</td>
            <td>{fileNumber}</td>
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
            <td>{fileName}</td>
            <td>{from}</td>
            <td>{to}</td>
            <td>{fileNumber}</td>
          </tr>
        );
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Document);
