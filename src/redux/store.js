import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import { actionsTypes } from "./actions";
import { initialState } from "./initialState";

export const appStore = createStore(appReducer, applyMiddleware(thunk));

function appReducer(state = initialState, action) {
  switch (action.type) {
    case actionsTypes.updateDate:
      return {
        ...state,
        date: action.payload,
      };
    case actionsTypes.updateFacts:
      return {
        ...state,
        facts: action.payload,
      };
    default:
      console.error("unknown action", action.type);
      return state;
  }
}
