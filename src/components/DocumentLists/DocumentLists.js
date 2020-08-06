import React, { useState } from "react";
import { Table } from "reactstrap";
import Document from "../Document/Document";
import DocumentDetails from "../DocumentDetails/DocumentDetails";
import "./DocumentList.css";
const DocumentLists = ({ status, showDocDetails, docDetails }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const documents = [
    {
      fileName: "Sample Document",
      from: "PNP123",
      to: "Dalisay",
      fileNumber: "00111",
      sent: "7-12-2020",
      received: "",
      status: "PENDING",
    },
    {
      fileName: "Sample Document 2",
      from: "PNPr2",
      to: "Dalisay",
      fileNumber: "00112",
      sent: "7-12-2020",
      received: "7-12-202",
      status: "ONPROCESS",
    },
    {
      fileName: "Sample Document 3",
      from: "PNPr2",
      to: "Ricardo",
      fileNumber: "00113",
      sent: "7-12-2020",
      received: "7-12-202",
      status: "OUTGOING",
    },
  ];
  const document = documents
    .filter((document) => document.status === status)
    .map((document) => {
      return (
        <Document
          fileName={document.fileName}
          from={document.from}
          to={document.to}
          fileNumber={document.fileNumber}
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
export default DocumentLists;
