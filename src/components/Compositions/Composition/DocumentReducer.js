import { VIEW_DOCUMENT_DETAILS } from "./DocumentConstants";

const initialState = {
  documentDetails: {},
};

export const viewDocDetails = (state = initialState, action = {}) => {
  switch (action.type) {
    case VIEW_DOCUMENT_DETAILS:
      return Object.assign({}, state, { documentDetails: action.payload });
    default:
      return state;
  }
};
