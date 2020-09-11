import React, { useState } from "react";
import { Table } from "reactstrap";
import Document from "../Document/Document";
import DocumentDetails from "../DocumentDetails/DocumentDetails";
import "./DocumentList.css";
const DocumentLists = ({
  status,
  checked,
  userType = "user",
  documents = [],
}) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  if (userType === "user") {
    const document = documents
      .filter(
        (document) => document.status === status && document.checked === checked
      )
      .map((document) => {
        return <Document document={document} toggle={toggle} />;
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
    const document = documents.map((document) => {
      return <Document document={document} toggle={toggle} />;
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
