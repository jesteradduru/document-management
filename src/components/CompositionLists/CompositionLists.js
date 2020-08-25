import React, { useState } from "react";
import { Table } from "reactstrap";
import Composition from "../Composition/Composition";
import DOCUMENTS from "../../containers/documents";
import { useParams } from "react-router-dom";
import CompositionDetails from "../CompositionDetails/CompositionDetails";

const CompositionLists = ({ status, showDocDetails, docDetails }) => {
  let { approval } = useParams();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const document = DOCUMENTS.filter(
    (document) => document.checked === approval.toUpperCase()
  ).map((document) => {
    return (
      <Composition
        fileName={document.fileName}
        from={document.from}
        to={document.to}
        fileNumber={document.fileNumber}
        remarks={document.remarks}
        toggle={toggle}
        document={document}
        showDocDetails={showDocDetails}
        checked={approval.toUpperCase()}
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
            <th>REMARKS</th>
            <th>APPROVAL</th>
          </tr>
        </thead>
        <tbody>{document}</tbody>
      </Table>
      <CompositionDetails
        modal={modal}
        toggle={toggle}
        docDetails={docDetails}
        status={status}
      />
    </div>
  );
};
export default CompositionLists;
