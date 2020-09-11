
import { GetDocuments } from "../Documents/DocumentActions";

export const compose = (formData) => (dispatch) => {
  fetch("http://localhost:5000/compose", {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch(GetDocuments());
      alert("Document Sent!");
    })
    .catch(console.log);
};
