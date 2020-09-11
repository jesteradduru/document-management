import { VIEW_DOCUMENT_DETAILS } from "./DocumentConstants";

export const viewDocDetails = (document) => {
  return {
    type: VIEW_DOCUMENT_DETAILS,
    payload: document,
  };
};
