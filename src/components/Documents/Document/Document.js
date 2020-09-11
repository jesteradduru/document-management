import React from "react";
import { connect } from "react-redux";
import { viewDocDetails } from "../DocumentActions";

const mapStateToProps = (state) => ({
  documentDetails: state.documents.documentDetails,
});
const mapDispatchToProps = (dispatch) => ({
  onViewDocumentDetails: (document) => dispatch(viewDocDetails(document)),
});

const Document = ({ document, toggle, onViewDocumentDetails }) => {
  return (
    <tr
      onClick={() => {
        onViewDocumentDetails(document);
        toggle();
      }}
    >
      <td>{document.filename}</td>
      <td>{document.from_user}</td>
      <td>{document.to_user}</td>
      <td>{document.id}</td>
    </tr>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Document);
