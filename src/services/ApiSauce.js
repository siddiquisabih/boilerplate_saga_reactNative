// @flow
import _ from "lodash";
import { create } from "apisauce";
import axios from "axios";
import { eventChannel, END, } from "redux-saga";
import {
  API_LOG,
  BASE_URL,
  API_TIMEOUT,
  ERROR_SOMETHING_WENT_WRONG,
  ERROR_NETWORK_NOT_AVAILABLE,
  PERMISSION_DENIED
} from "../config/WebService";
import DataHandler from "./DataHandler";
const api = create({
  baseURL: BASE_URL,
  timeout: API_TIMEOUT,

})

const store = DataHandler.getStore()

class ApiSauce {

  async post(url, data, headers, baseUrl) {
    api.setBaseURL(baseUrl);

    const response = await api.post(url, data, {
      headers
    });

    if (__DEV__ && API_LOG) {
      console.log("url", url);
      console.log("data", data);
      console.log("headers", headers);
      console.log(response);
    }

    return this.manipulateResponse(response);
  }

  async get(url, data, headers, baseUrl) {
    console.log('hoi')
    api.setBaseURL(baseUrl);
    const response = await api.get(url, data, {
      headers
    });

    if (__DEV__ && API_LOG) {
      console.log("url", url);
      console.log("headers", headers);
      console.log(response);
    }
    return this.manipulateResponse(response);
  }

  async delete(url, data, headers, baseUrl) {
    api.setBaseURL(baseUrl);
    const response = await api.delete(
      url,
      {},
      {
        headers
      }
    );

    if (__DEV__ && API_LOG) {
      console.log("url", url);
      console.log("headers", headers);
      console.log(response);
    }

    return this.manipulateResponse(response);
  }

  async put(url, data, headers, baseUrl) {
    api.setBaseURL(baseUrl);
    const response = await api.put(url, data, {
      headers
    });

    if (__DEV__ && API_LOG) {
      console.log("url", url);
      console.log("data", data);
      console.log("headers", headers);
      console.log(response);
    }

    return this.manipulateResponse(response);
  }

  postWithProgress(url, data, headers) {
    if (__DEV__ && API_LOG) {
      // console.log("url", url);
      // console.log("headers", headers);
    }
    const { CancelToken } = axios;
    let cancel;
    return eventChannel(emitter => {
      api
        .post(url, data, {
          headers,
          cancelToken: new CancelToken(c => {
            // An executor function receives a cancel function as a parameter
            cancel = c;
          }),
          onUploadProgress: e => {
            if (e.lengthComputable) {
              const progress = Math.round((e.loaded / e.total) * 100);
              emitter({ progress, cancelToken: cancel });
            }
          }
        })
        .then(
          response => {
            if (response.ok && response.data && !response.data.error) {
              emitter({ success: response.data });
              emitter(END);
            } else if (response.problem === "NETWORK_ERROR") {
              emitter({ err: ERROR_NETWORK_NOT_AVAILABLE });
              emitter(END);
            } else if (response.problem === "CANCEL_ERROR") {
              emitter({ cancelled: ERROR_CANCEL_ERROR });
              emitter(END);
            } else {
              emitter({ err: ERROR_SOMETHING_WENT_WRONG });
              emitter(END);
            }
          },
          err => {
            if (err.problem === "NETWORK_ERROR") {
              emitter({ err: ERROR_NETWORK_NOT_AVAILABLE });
              emitter(END);
            } else if (err.problem === "CANCEL_ERROR") {
              emitter({ cancelled: ERROR_CANCEL_ERROR });
              emitter(END);
            } else {
              emitter({ err: ERROR_SOMETHING_WENT_WRONG });
              emitter(END);
            }
          }
        );

      return () => { };
    });
  }

  manipulateResponse(response) {
    console.log('ues')
    return new Promise(async (resolve, reject) => {
      if (response.ok && response.data && !response.data.error) {
        resolve(response.data);
      } else {
        // unauthoraized
        if (response.status === 401) {
          await this.refreshAndRequestAgain(response, resolve)
        }

        // server error
        if (response.status === 500) {
          reject(ERROR_SOMETHING_WENT_WRONG);
        }
        if (response.status === 400) {
          reject(response.data);
        }
        // not found
        if (response.status === 404) {
          reject(ERROR_SOMETHING_WENT_WRONG); //message
        }

        //permission denied
        if (response.status === 403) {
          console.log(403)
          reject(PERMISSION_DENIED); //message
        }

        // not allowed
        if (response.status === 422) {
          reject(response.data); //message
        }

        if (response.problem === "NETWORK_ERROR") {
          reject(ERROR_NETWORK_NOT_AVAILABLE);
        }
        // success
        if (response.status === 201) {
          resolve(response.data);
        }

        // duplicate
        if (response.status === 409) {
          reject(response.data);
        }
        if (!response.status) {
          reject(ERROR_NETWORK_NOT_AVAILABLE);
        }

        // reject(response.data || ERROR_SOMETHING_WENT_WRONG);
      }
    });
  }


  async refreshAndRequestAgain(response, resolve) {

    // try {

    //   var deviceId = await globalFunc.getDeviceUniqueId()
    //   var notificationId = await globalFunc.getFcmToken()
    //   var arcValues = 'device_id:' + deviceId + ' notification_id:' + notificationId

    //   const originalRequest = response.config
    //   originalRequest._retry = true

    //   const refreshToken = globalFunc.getRefreshToken()
    //   var refreshConfig = REFRESH_TOKEN_INENTITY_CONFIG(refreshToken, arcValues)
    //   console.log(refreshConfig, 'refreshConfig', HASH_CODE_AUTH)
    //   var tokenHeaders = {
    //     'Content-Type': "application/x-www-form-urlencoded",
    //   }

    //   const tokenResp = await axios.post(AUTH_BASE_URL + REFRESH_TOKEN.route, refreshConfig, { headers: tokenHeaders })
    //   console.log(tokenResp, "tokenResp")
    //   var urlParams = new URLSearchParams()
    //   urlParams.append("token", tokenResp.data.access_token)

    //   var introHeader = {
    //     'Content-Type': "application/x-www-form-urlencoded",
    //     'Authorization': 'Basic ' + HASH_CODE_AUTH
    //   }

    //   console.log(urlParams, 'paramsssssssssss')
    //   const introSpect = await axios.post(AUTH_BASE_URL + INTRO_SPECT.route, urlParams, { headers: introHeader })
    //   console.log(introSpect, 'siddi')

    //   var userInfoHeader = {
    //     'Authorization': 'Bearer ' + tokenResp.data.access_token,
    //     'Content-Type': "application/x-www-form-urlencoded",
    //   }
    //   const userInfo = await axios.get(AUTH_BASE_URL + IDENTITY_USER_INFO.route, { headers: userInfoHeader })
    //   console.log(userInfo)

    //   if (userInfo.data.hasOwnProperty('Allow_CrownOneApp')) {
    //     var payload = {
    //       access_token: tokenResp.data.access_token,
    //       refresh_token: tokenResp.data.refresh_token,
    //       introSpect: introSpect.data,
    //       userInfo: userInfo.data,
    //     }
    //     console.log(originalRequest, 'orignal request')
    //     originalRequest.headers.Authorization = 'Bearer ' + tokenResp.data.access_token
    //     // axios.defaults.headers.common['Authorization'] = 'Bearer ' + tokenResp.data.access_token
    //     axios(originalRequest)
    //       .then((resp) => {
    //         DataHandler.getStore().dispatch(saveRefreshData(payload));
    //         resolve(resp.data)
    //       })

    //   }
    //   else {
    //     DataHandler.getStore().dispatch(userLogoutSuccess());
    //     RootNavigation.replace(RouteKey.SPLASH)
    //   }
    // }
    // catch (errrrrr) {
    //   console.log(errrrrr.response, 'errrrrrrr')
    //   DataHandler.getStore().dispatch(userLogoutSuccess());
    //   RootNavigation.replace(RouteKey.SPLASH)
    // }


  }
}





export default new ApiSauce();