
import {
  LOGIN,
  LOGOUT,


} from "./actionTypes";


export function userLoginRequest(payload, callBack) {
  return {
    type: LOGIN.REQUEST,
    payload,
    callBack,
  };
}

export function userLoginFailed(payload) {
  return {
    type: LOGIN.FAILURE,
    payload,
  };
}

export function userLoginSuccess(payload) {
  return {
    //   data,
    payload,
    type: LOGIN.SUCCESS
  };
}

export function userLogoutRequest(callback) {

  return {
    type: LOGOUT.REQUEST,
    callback,
  }
}

export function userLogoutSuccess() {
  return {
    type: LOGOUT.SUCCESS
  }
} 