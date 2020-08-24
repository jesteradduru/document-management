import React, { useState } from "react";
import { Table } from "reactstrap";
import Document from "../Document/Document";
import DOCUMENTS from "../../containers/documents";
import DocumentDetails from "../DocumentDetails/DocumentDetails";
import { useParams } from "react-router-dom";
const CompositionLists = ({ status, showDocDetails, docDetails }) => {
  let { approval } = useParams();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const document = DOCUMENTS.filter(
    (document) => document.checked === approval.toUpperCase()
  ).map((document) => {
    return (
      <Document
        fileName={document.fileName}
        from={document.from}
        to={document.to}
        fileNumber={document.fileNumber}
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
            <th>FROM</th>
            <th>TO/FOR</th>
            <th>FILE NUMBER</th>
          </tr>
        </thead>
        <tbody>{document}</tbody>
      </Table>
      <DocumentDetails
        modal={modal}
        toggle={toggle}
        docDetails={docDetails}
        status={status}
      />
    </div>
  );
};
export default CompositionLists;
