//  rula k gaya ishq tera 

import _ from "lodash";
import UTILS from "../utils/globalFunc";


export const BASE_URL = "https://devcrownone.fit.com.pk/"; //development app
export const AUTH_BASE_URL = "https://devcustomeridentity.fit.com.pk/"; //development auth
export const IDENTITY_USERNAME = "CrownOne.Api" //development
export const IDENTITY_PASSWORD = "CrownOne.Api" //development
export const IS_DEBUG_VERSION = true //development
export const FIX_GURU_BASE_URL = "https://devfixguruapi.fit.com.pk/" //development

export const API_TIMEOUT = 30000;
export const API_LOG = true;


export const ERROR_SOMETHING_WENT_WRONG = {
  message: "Something went wrong, Please try again later",
  error: "Something went wrong, Please try again later"
}

export const ERROR_NETWORK_NOT_AVAILABLE = {
  message: "Please connect to the working Internet",
  error: "Please connect to the working Internet"
}

export const ERROR_TOKEN_EXPIRE = {
  message: "Session Expired, Please login again!",
  error: "Session Expired, Please login again!"
}

export const PERMISSION_DENIED = {
  message: "You are not allowed to use this. Kindly contact to CRM",
  error: "You are not allowed to use this. Kindly contact to CRM"
}

export const REQUEST_TYPE = {
  GET: "get",
  POST: "post",
  DELETE: "delete",
  PUT: "put"
}

export const LOGIN_URL = {
  route: "connect/token",
  access_token_required: false,
  type: REQUEST_TYPE.POST
}









export const callRequest = function (
  url,
  data,
  parameter,
  header = {},
  ApiSauce,
  baseUrl = BASE_URL
) {
  // note, import of "ApiSause" has some errors, thats why I am passing it through parameters

  let _header = header;
  if (url.access_token_required) {
    const _access_token = UTILS.getCurrentUserAccessToken()
    if (_access_token) {
      _header = {
        ..._header,
        ...{
          Authorization: `Bearer ${_access_token}`
        }
      }
    }
  }

  const _url =
    parameter && !_.isEmpty(parameter)
      ? `${url.route}/${parameter}`
      : url.route;

  if (url.type === REQUEST_TYPE.POST) {
    return ApiSauce.post(_url, data, _header, baseUrl);
  } else if (url.type === REQUEST_TYPE.GET) {
    return ApiSauce.get(_url, data, _header, baseUrl);
  } else if (url.type === REQUEST_TYPE.PUT) {
    return ApiSauce.put(_url, data, _header, baseUrl);
  } else if (url.type === REQUEST_TYPE.DELETE) {
    return ApiSauce.delete(_url, data, _header, baseUrl);
  }
  // return ApiSauce.post(url.route, data, _header);
};



// CSI-CROWNTEAM (API) = api.fit.com.pk:3393
// CSI-CROWNFAMILY (API) = api.fit.com.pk:3392


// CSI-STS-CUSTOMER (WEB) = 3396

// CSI-STS-COMPANY (WEB) = 3399 //identity server live



//  wednesday
// 9:50

// var abc = {
//   id: '',
//   lat: '',
//   long: '',
//   data: {
//     "question1": "asd",
//     "question3": 'item 1',
//     "question5": "as dgjahgs djahgs djag sjdga jsdg",
//     "question6": 5,
//     "question7": true,
//   }
// }