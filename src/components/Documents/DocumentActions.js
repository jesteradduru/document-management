import { VIEW_DOCUMENT_DETAILS, GET_DOCUMENTS } from "./DocumentConstants";

export const viewDocDetails = (document) => {
  return {
    type: VIEW_DOCUMENT_DETAILS,
    payload: document,
  };
};

export const GetDocuments = () => (dispatch) => {
  fetch("http://localhost:5000/documents")
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: GET_DOCUMENTS, payload: data });
    })
    .catch((err) => console.error(err));
};

export const AcceptDocument = (id) => (dispatch) => {
  fetch("http://localhost:5000/processDoc", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      document_id: id,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: GET_DOCUMENTS, payload: data });
    })
    .catch((err) => console.error(err));
};

export const DownloadDocument = (id) => (dispatch) => {
  fetch("http://localhost:5000/download", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      document_id: id,
    }),
  })
    .then((res) => {
      res.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = "";
        a.click();
      });
    })
    .catch((err) => console.error(err));
};

export const overwriteDoc = (formData) => (dispatch) => {
  fetch("http://localhost:5000/compose", {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch(GetDocuments());
      alert("Moved to outgoing");
    })
    .catch(console.log);
};
