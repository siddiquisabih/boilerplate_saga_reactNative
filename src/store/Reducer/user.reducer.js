// @flow
import Immutable from "seamless-immutable";
import {
  LOGIN,
 } from "../Actions/actionTypes";


const initialState = Immutable({
  access_token: null,
  authToken: null,
  refresh_token: null,

  loading: false,
  registerError: null,
  loginError: false,
  errorMessage: null,

  introSpecData: null,
  userData: null,

});

export default (state = initialState, action) => {
  switch (action.type) {
  

    case LOGIN.REQUEST: {
      return Immutable.merge(state, {
        loading: true
      })
    }

    case LOGIN.FAILURE: {
      return Immutable.merge(state, {
        loading: false,
        loginError: true,
        errorMessage: action.payload.error,
      });
    }

    case LOGIN.SUCCESS: {
      console.log(action.payload)
      return Immutable.merge(state, {
        // userData: action.data,
        access_token: action.payload.loginResponse.access_token,
        refresh_token: action.payload.loginResponse.refresh_token,
        loading: false,

        introSpecData: action.payload.introSpect,
        userData: action.payload.userInfo,
      })
    }


    default:
      return state;
  }

};
