import produce from "immer";

import { RESOLVE_CONFIG } from "../constants";

const initialState = {
  isLoading: true,
  config: {
    header: null,
    paragraph: null,
    list: null,
    checklist: null,
    embed: null,
    table: null,
    warning: null,
    code: null,
    link_tool: null,
    raw: null,
    quote: null,
    marker: null,
    delimiter: null,
    inlineCode: null,
    component: null,
  },
};

export const configReducer = produce((state = initialState, action) => {
  switch (action.type) {
    case RESOLVE_CONFIG: {
      state.isLoading = false;
      state.config = action.data;
      break;
    }

    default:
      return state;
  }

  return state;
});
