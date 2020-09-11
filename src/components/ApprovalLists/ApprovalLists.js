import React, { useState } from "react";
import { Table } from "reactstrap";
import Composition from "../Compositions/Composition/Composition";
import ApprovalDetail from "./ApprovalDetaill";
import { connect } from "react-redux";
const mapStateToProps = (state) => ({
  documents: state.documents.documents,
});

const ApprovalLists = ({
  status,
  showDocDetails,
  docDetails,
  documents = [],
}) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const document = documents
    .filter((document) => document.checked === "PENDING")
    .map((document) => {
      return (
        <Composition
          toggle={toggle}
          document={document}
          showDocDetails={showDocDetails}
        />
      );
    });
  return (
    <div>
      <Table responsive hover bordered>
        <thead>
          <tr>
            <th>FILENAME</th>
            <th>TO/FOR</th>
            <th>FROM</th>
            <th>REMARKS</th>
          </tr>
        </thead>
        <tbody>{document}</tbody>
      </Table>
      <ApprovalDetail
        modal={modal}
        toggle={toggle}
        docDetails={docDetails}
        status={status}
      />
    </div>
  );
};
export default connect(mapStateToProps, null)(ApprovalLists);
