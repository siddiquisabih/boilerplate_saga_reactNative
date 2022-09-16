import { combineReducers } from "@reduxjs/toolkit";
import user from "./user.reducer";
import { LOGOUT } from "../Actions/actionTypes";


const appReducer = combineReducers({
  user,
});

export default (state, action) => {
  if (action.type === LOGOUT.SUCCESS) {
    console.log("success type");
    state = {
      user: undefined,
    };
  }

  return appReducer(state, action);
};
