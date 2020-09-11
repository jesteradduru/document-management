import { GetDocuments } from "../Documents/DocumentActions";
export const documentApproval = (approval, formData, docId) => (dispatch) => {
  fetch("http://localhost:5000/approval", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      document_id: docId,
      remarks: formData.get("remarks"),
      approval: approval,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dispatch(GetDocuments());
    })
    .catch(console.log);
};
