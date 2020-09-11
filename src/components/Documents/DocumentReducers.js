import { GET_DOCUMENTS } from "./DocumentConstants";
import { VIEW_DOCUMENT_DETAILS } from "./DocumentConstants";

const initialState = {
  documentDetails: {},
  documents: [],
};

export const documents = (state = initialState, action = {}) => {
  switch (action.type) {
    case VIEW_DOCUMENT_DETAILS:
      return Object.assign({}, state, { documentDetails: action.payload });
    case GET_DOCUMENTS:
      return Object.assign({}, state, { documents: action.payload });
    default:
      return state;
  }
};
