import { take, put, call, fork, all, } from "redux-saga/effects";
import {
  LOGIN,
} from "../Actions/actionTypes";
import {
  userLoginSuccess, userLoginFailed,
} from "../Actions/userAction";
import {
  LOGIN_URL,
} from "../../config/WebService";
import ApiSauce from "../../services/ApiSauce";


function* login() {

  while (true) {

    const { payload, callBack } = yield take(LOGIN.REQUEST);

    try {

    } catch (err) {
    }
  }
}

function* logout() {
  while (true) {
    const { payload, callback, } = yield take(LOGOUT.REQUEST);

    try {
      yield put(userLogoutSuccess())
      callBack()
    } catch (err) {
      console.log(err)
    }
  }
}

export default function* root() {
  yield all([
    fork(logout),
    fork(login),
  ])
}
