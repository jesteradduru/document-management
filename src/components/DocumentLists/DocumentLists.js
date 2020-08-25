import React, { useState } from "react";
import { Table } from "reactstrap";
import Document from "../Document/Document";
import DocumentDetails from "../DocumentDetails/DocumentDetails";
import "./DocumentList.css";
import DOCUMENTS from "../../containers/documents";

const DocumentLists = ({
  status,
  showDocDetails,
  docDetails,
  checked,
  userType,
}) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  if (userType === "user") {
    const document = DOCUMENTS.filter(
      (document) => document.status === status && document.checked === checked
    ).map((document) => {
      return (
        <Document
          fileName={document.fileName}
          from={document.from}
          to={document.to}
          fileNumber={document.fileNumber}
          document={document}
          toggle={toggle}
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
        <DocumentDetails modal={modal} toggle={toggle} />
      </div>
    );
  } else {
    const document = DOCUMENTS.map((document) => {
      return (
        <Document
          fileName={document.fileName}
          from={document.from}
          to={document.to}
          fileNumber={document.fileNumber}
          document={document}
          toggle={toggle}
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
        <DocumentDetails modal={modal} toggle={toggle} />
      </div>
    );
  }
};
export default DocumentLists;
