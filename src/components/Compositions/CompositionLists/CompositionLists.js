import React, { useState } from "react";
import { Table } from "reactstrap";
import Composition from "../Composition/Composition";
import { useParams } from "react-router-dom";
import CompositionDetails from "../CompositionDetails/CompositionDetails";

const CompositionLists = ({
  status,
  showDocDetails,
  docDetails,
  documents = [],
}) => {
  let { approval } = useParams();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const document = documents
    .filter((document) => document.checked === approval.toUpperCase())
    .map((document) => {
      return (
        <Composition
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
