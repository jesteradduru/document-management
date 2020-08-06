import React from "react";
const DocsStatus = ({
  fileName,
  from,
  to,
  fileNumber,
  toggle,
  showDocDetails,
  document,
}) => {
  return (
    <tr
      onClick={() => {
        showDocDetails(document);
        toggle();
      }}
    >
      <td>{fileName}</td>
      <td>{from}</td>
      <td>{to}</td>
      <td>{fileNumber}</td>
    </tr>
  );
};
export default DocsStatus;
